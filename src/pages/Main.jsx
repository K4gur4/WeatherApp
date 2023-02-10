import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/sideBar'

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Home
