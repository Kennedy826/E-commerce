import React from 'react'
import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
       <NavItems />
       <div className='min-vh-100'>
       <Outlet />
       </div>
      <Footer />
    </>
  )
}

export default App