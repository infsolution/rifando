import React from "react";
import { NextPage } from "next"
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import supabase from '../connection/supabase'
const  Navbar: NextPage =()=>{
    const {profile,loged, logout }= React.useContext(AuthContext)
    const router = useRouter()
    async function logOut(){
        logout()
    }
    React.useEffect(()=>{
        const{'rfd-token': token} = parseCookies()
    },[])

    return(
       <>
        { router.pathname != '/login' && router.pathname != '/signup' && 
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">

                <li className="nav-item">
                    <a className="nav-link active" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a>{profile&&profile.name}</a>
                    { !loged && <button className="btn btn-success" onClick={()=>router.push('/login')}>Login</button>}
                    {  loged && <button className="btn btn-danger" onClick={logOut}>Sair</button>}
                </div>
            
            
            </nav>}
        </> 
    )
}

export default Navbar