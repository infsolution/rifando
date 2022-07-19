import { NextPage } from "next"
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { signUp } from "../services/profile/profile";
import { useRouter } from 'next/router'

const  Signup: NextPage =()=>{
    const { register, handleSubmit } = useForm();
    const router = useRouter()
    async function handleSingUp(data: {[x:string]:any}){
        try {
          const profile =  await signUp(data)
          if(profile){
            router.push('/login')
          }    
       } catch (error) {
           console.log(error)
       }
    }
    return(        
        <div className='container'>
            <form onSubmit = { handleSubmit(handleSingUp) }>
                <div className="form-outline mb-4">
                    <input type="text" id="form2Example1" className="form-control" {...register('name')}/>
                    <label className="form-label" >Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" id="form2Example2" className="form-control" {...register('email')}/>
                    <label className="form-label" >Email address</label>
                </div>


                <div className="form-outline mb-4">
                    <input type="password" id="form2Example3" className="form-control"  {...register('password')}/>
                    <label className="form-label" >Password</label>
                </div>


                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

                <div className="text-center">
                    <p>already a member? <Link href="/login"><a>Login</a></Link></p>
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

export default Signup