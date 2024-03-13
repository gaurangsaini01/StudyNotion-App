import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frameImage from "../assets/frame.png";
import {FcGoogle} from 'react-icons/fc'

function Template({title,desc1,desc2,image,formType,setLoginStatus}) {
  return (
    <div className='text-white w-11/12 flex max-w-[1160px] h-full py-12 mx-auto gap-x-12'>
        <div className=''>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span><br />
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formType==='signup'?(<SignUpForm setLoginStatus={setLoginStatus}></SignUpForm>):(<LoginForm setLoginStatus={setLoginStatus}></LoginForm>)}
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem] '>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <button className='flex w-full items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle></FcGoogle>
                Sign up with Google</button>
        </div>
        <div>
            <img src={frameImage} width={558} height={504} loading='lazy' />
            <img src={image} width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template