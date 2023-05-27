import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Typing from '../Component/Typing'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Typing/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes