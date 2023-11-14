import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Signin from '../authorization/Signin'





export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Signin/>
        <Footer/> 
        
        
       
    </div>
  )
}
