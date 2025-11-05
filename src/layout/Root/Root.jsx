import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-950 text-orange-400 font-nunito">
        <Navbar />
        <main className='flex-1'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Root