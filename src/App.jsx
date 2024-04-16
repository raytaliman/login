import { useState } from 'react'
import './App.css'
import {Link, Input} from "@nextui-org/react";
import Nav from "./components/Nav.jsx";





const App = () => {
  return (
    <>
    <Nav />
    <div className="container mx-auto object-none object-center">
      <div className="flex flex-col m-8">
        <div className="grid grid-cols-3 gap-4">
          <div></div>
          <div><div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="email" label="Email" />
        </div></div>
          <div></div>
        </div>
      </div>
     
    </div>

    

    </>
  )
}

export default App
