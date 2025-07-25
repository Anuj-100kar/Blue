import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserLayout = () => {
  return (
    <>
      <Header/>
      <main className='min-h-screen'>
            <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default UserLayout
