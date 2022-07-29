import React from "react";
import { NextPage } from "next"
import { AuthContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
const  RNavbar: NextPage =(args)=>{
    const {profile,loged, logout }= React.useContext(AuthContext)
    const [isOpen, setIsOpen] = React.useState(false);
    const router = useRouter()
    const toggle = () => setIsOpen(!isOpen);
    async function logOut(){
        logout()
    }
    React.useEffect(()=>{
        const{'rfd-token': token} = parseCookies()
    },[])

    return(
       <>
        { router.pathname != '/login' && router.pathname != '/signup' && <div>
           <Navbar {...args}>
           <NavbarBrand href="/">Rifando</NavbarBrand>
           <NavbarToggler onClick={toggle} />
           <Collapse isOpen={isOpen} navbar>
             <Nav className="me-auto" navbar>
               <NavItem>
                 <NavLink href="/components/">{profile&&profile.name}</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
               </NavItem>
               <UncontrolledDropdown nav inNavbar>
                 <DropdownToggle nav caret>
                   Options
                 </DropdownToggle>
                 <DropdownMenu right>
                   <DropdownItem>
                     Option 1
                   </DropdownItem>
                   <DropdownItem>
                     Option 2
                   </DropdownItem>
                   <DropdownItem divider />
                   <DropdownItem>
                     Reset
                   </DropdownItem>
                 </DropdownMenu>
               </UncontrolledDropdown>
             </Nav>
             { !loged && <button className="btn btn-success" onClick={()=>router.push('/login')}>Login</button>}
            {  loged && <button className="btn btn-danger" onClick={logOut}>Sair</button>}
           </Collapse>
         </Navbar>
         </div>
           }
        </> 
    )
}

export default RNavbar