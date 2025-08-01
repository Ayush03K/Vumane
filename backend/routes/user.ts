import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from 'vumane-common'
import { cors } from 'hono/cors'

const route = new Hono<{
  Bindings:{
    JWT_SECRET: string
    DATABASE_URL:string
  }
}>()
route.use(cors({
  origin: 'http://localhost:5173', // allow this frontend
  credentials: true               // allow cookies/authorization headers
}));
route.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        result : "Incorrect Inputs"
      })
    }
    const existingUser = await prisma.user.findUnique({
      where : {
        email : body.email
      }
    })
    if(!existingUser){
      const user = await prisma.user.create({
        data:{
          name:body.name,
          email:body.email,
          password:body.password
        }
      })
      const userId = user.id;
      const token = await sign({userId},c.env.JWT_SECRET);
      return c.json({  
        result: 'Signup Successfully ',token
      }, 201)
    }else{
      return c.json({ 
        result: 'User already Exists' 
      }, 401)
    }
  }catch(error){
    console.error("error using signup",error);
  }
})

route.post('/signin',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  try {
    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        result : "Incorrect Inputs"
      })
    }
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password : body.password //check this if we omit password will user login successfully with icorrect or no
      }
    })
    if(!user){
      return c.json({ 
        result: 'User doesnot exist' 
      }, 401)  
    }
    const userId = user.id;
    const token = await sign({userId},c.env.JWT_SECRET)
    return c.json({ 
      result: 'Signin Successfully',token 
    }, 201)
  }catch(error){
    console.error("problem in siginin",error);
  }
    
})

export default route;
