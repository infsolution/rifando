import React, { useContext } from 'react'
import Link from 'next/link'
import { addDays } from 'date-fns'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { SignInData } from '../types/types';
import { AuthContext } from '../contexts/AuthContext';
import { parseCookies } from 'nookies'
export function FormLogin(){
    const [isLoading, setLoading] = React.useState(false)
    const { register, handleSubmit } = useForm();
    const {signIn}= useContext(AuthContext)
    const router = useRouter()

   async  function handleSingIn(data: {[x:string]:any}){
       try {
            await signIn(data)    
       } catch (error) {
           console.log(error)
       }
       
    }
    React.useEffect(()=>{
        const {'rfd-token': token} = parseCookies()
        if(token){
            router.push('/')
        }
        setLoading(false)
    },[])
   
    return(
        <div className='container'>
                <form onSubmit = { handleSubmit(handleSingIn) }>

                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" {...register('email')}/>
                        <label className="form-label" >Email address</label>
                    </div>


                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control"  {...register('password')}/>
                        <label className="form-label" >Password</label>
                    </div>


                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
 
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" > Remember me </label>
                        </div>
                        </div>

                        <div className="col">

                        <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                        </button>
                    </div>
                </form>

        </div>
    )
}
