"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import Link from 'next/link'
const Loginpage = () => {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    
      const onSubmit = (data) => console.log(data)
    
    
      console.log(watch("example")) 
    
    
  return (
    <div className='mx-auto my-auto justify-center text-center bg-blue-200'>
    <h1 className='mx-2 my-2 font-bold text-4xl'>Loginpage</h1>
    <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
            <input className='mx-5 my-4 py-2 px-2 bg-gray-100 text-black' {...register("email", {required:true})} type="text" placeholder='email'/>
            {errors.email && <span>Email is required</span>}
        </div>
        <div>
            <input className='mx-5 my-4 py-2 px-2 bg-gray-100 text-black' {...register("password", {required:true, minLength:8})} type="password" placeholder='password'/>
            {errors.password && <span>password is required</span>}
        </div>
        <div>
            <button className=''> Submit</button>
        </div>
    </form>
    <h3>if you are not register yet then go Signup</h3>
    <Link href="/signup">Signup</Link>
    </div>
  )
}

export default Loginpage