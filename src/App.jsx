import { useState } from 'react'
import Userlogo from './assets/Userlogo.jsx';
import './App.css'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import {Link, Input} from "@nextui-org/react";


const App = () => {
  return (
    <>
   <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
    </Navbar>
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
    </div>
    </>
  )
}

export default App
