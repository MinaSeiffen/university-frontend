import React from 'react'
import Navbar from './src/components/Navbar/index'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/footer'


export default function AppLayout() {
  return (
<>
<Navbar/>
<Outlet/>
<Footer/>
</>

    )
}
