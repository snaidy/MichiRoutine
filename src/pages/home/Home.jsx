import React from 'react'
import './home.scss'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <>
    <main className='home'>
        <h1>home</h1>
    </main>
    <div className='nav-mobile-home'>
        <Navbar />
    </div>
    </>
  )
}

export default Home