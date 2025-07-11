import React from 'react'

export default function Signup() {
  return (
    <div className='bg-primary h-screen w-screen'>
        <div className='flex flex-row '>            
            <div className='h-screen w-1/2  flex flex-col justify-center items-center gap-10 text-onwghite text-start'>
            <div className='text-onwghite h-10 font-bold text-4xl font-sans pb-16'>Signup Page</div>
                <input type='text' placeholder=' Name' className='text-onwghite bg-primary h-12 w-2/6 '></input>
                <input type='text' placeholder=' Email' className='text-onwghite bg-primary h-12 w-2/6'></input>
                <input type='text' placeholder=' Password' className='text-onwghite bg-primary h-12 w-2/6'></input>
                <div className='h-12 w-60 bg-yellow-800 justify-center rounded-md flex items-center hover:bg-slate-300 hover:text-black'>Sign Up</div>

            </div>

            <div className='bg-yellow-800 h-screen w-1/2 flex justify-center items-center'>
                <div className='text-onwghite text-2xl font-serif'>
                    An unenimed life is not worth a life
                    <div className='text-end italic '>--Socrates</div>
                </div>
            </div>
        </div>
    </div>
  )
}
