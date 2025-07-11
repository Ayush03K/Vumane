import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono'
import { Bindings } from 'hono/types';
import { authMiddleware } from './middleware'
import { createblogInput, updateBlogInput } from 'vumane-common';
const route = new Hono<{
  Bindings:{
    DATABASE_URL:string;
    JWT_SECRET:string;
  }
  Variables:{
    userId : string
  }
}>();
route.use('/api/v1/blog/*', authMiddleware); 
//add pagination
route.get('/bulk',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const blogs = await prisma.blog.findMany();
  return c.json({
      result : blogs
    })
})
route.get('/:id',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const id = c.req.param('id');
  const body = await c.req.json();
  try{
    const blog = await prisma.blog.findFirst({
      where:{
        id : id
      }
    })
    return c.json({
        result: blog
      })
  }catch(err){ 
    c.status(500);
    return c.json({
      result : "error while finding matbe wrong id or something",err
    })
  }
})
route.put('/',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const {success} = updateBlogInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      result : 'Incorroct Inputs'
    })
  }
  try{
    const blog = await prisma.blog.update({
      where:{
        id : body.id
      },
      data:{
        title:body.title,
        content:body.content
      }
    })
      return c.json({ 
        result: 'Blog updated',blog
      })
  }catch(err){
    c.status(500);
    return c.json({
      result : "either wrong id to edit the blog or",err   
    })
  }
})
route.post('/', authMiddleware,async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl:c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const userId = c.get('userId'); // Type-safe retrieval
  const body = await c.req.json();
  const {success} = createblogInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      result : 'Incorrect Inputs'
    })
  }
  console.log(userId)
  if (!userId) {
  return c.json({ error: 'User ID is missing or invalid.' });
  }
  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({ id: blog.id });
  } catch (err) {
    c.status(500);
    return c.json({ error: 'Error creating blog', details: err });
  }
});



export default route;
