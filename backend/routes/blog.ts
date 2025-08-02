import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { Bindings } from "hono/types";
import { cors } from "hono/cors";
import { authMiddleware } from "./middleware";
import { createblogInput, updateBlogInput } from "vumane-common";

const route = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
route.use("/*",cors());
route.use("/api/v1/blog/*", authMiddleware);
route.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//add pagination
route.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const blogs = await prisma.blog.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return c.json({
    result: blogs,
  });
});
route.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  try {
    const blog = await prisma.blog.findFirst({
      where: { id },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({
      result: blog,
    });
  } catch (err) {
    c.status(500);
    return c.json({
      result: "error while finding matbe wrong id or something",
      err,
    });
  }
});
route.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      result: "Incorroct Inputs",
    });
  }
  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      result: "Blog updated",
      blog,
    });
  } catch (err) {
    c.status(500);
    return c.json({
      result: "either wrong id to edit the blog or",
      err,
    });
  }
});
route.post("/", authMiddleware, async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  const body = await c.req.json();

  const { success, error: validationError } = createblogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      result: "Incorrect Inputs",
      details: validationError?.format?.(),
    });
  }

  if (!userId) {
    c.status(401);
    return c.json({ error: "User ID is missing or invalid." });
  }

  try {
    const existing = await prisma.blog.findFirst({
      where: {
        title: body.title,
        authorId: userId,
      },
    });

    if (existing) {
      c.status(409); // Conflict
      return c.json({ result: "⚠️ Blog already posted with this title." });
    }

    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
        category: body.category,
        like: body.like,
        tags: body.tags,
      },
    });

    return c.json({ id: blog.id });
  } catch (err: unknown) {
    console.error("❌ Error creating blog:", err);

    c.status(500);
    return c.json({
      error: "Internal Server Error while creating blog",
      message: err instanceof Error ? err.message : "Unknown error",
    });
  }
});

export default route;
