import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono'
import { jwt,verify } from 'hono/jwt'
import { MiddlewareHandler } from 'hono';
const app = new Hono<{
    Bindings:{
      JWT_SECRET: string
      DATABASE_URL:string
    }
    Variables : {
        userId :string;
    }
  }>()

export const authMiddleware:MiddlewareHandler = async (c,next) => {
    const prisma =new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const authHeader = c.req.header('Authorization') || '';
    const token = authHeader.split(' ')[1];
    if(!token){
        c.status(401);
        return c.json({error : "unauthorized"});
    }
    try{
        const decoded = await verify(token, c.env.JWT_SECRET) as {userId : string};
    // console.log(decoded)
    if(!decoded){
        return c.json({error : 'unauthorized token'});
    }
    c.set("userId",decoded.userId);
    await next(); 
    }catch(err){
        c.status(403);
        return c.json({
            result : "You are logged in"
        })
    }
}