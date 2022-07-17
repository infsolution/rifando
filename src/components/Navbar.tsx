import React from "react";
import { NextPage } from "next"
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router'
const  Navbar: NextPage =()=>{
    const {user, logout }= React.useContext(AuthContext)
    const router = useRouter()
    console.log(router.pathname)
    async function logOut(){
        logout()
    }
    return(
       <>
        { router.pathname != '/login' && <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            { user && <button className="btn btn-danger" onClick={logOut}>Sair</button>}
            </nav>}
        </> 
    )
}

export default Navbar