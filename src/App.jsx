import { useState } from 'react'
import Userlogo from './assets/Userlogo.jsx';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import Homepage from './pages/Homepage.jsx';
import {Button, ButtonGroup} from "@nextui-org/react";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Route  element = {<Homepage />} />
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
