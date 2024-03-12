import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import frameImage from "../assets/frame.png";
function Template({title,desc1,desc2,image,formType,setLoginStatus}) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formType==='signup'?(<SignUpForm setLoginStatus={setLoginStatus}></SignUpForm>):(<LoginForm setLoginStatus={setLoginStatus}></LoginForm>)}
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>Sign up with Google</button>
        </div>
        <div>
            <img src={frameImage} width={558} height={504} loading='lazy' />
            <img src={image} width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template