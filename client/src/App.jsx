import React from 'react'
import {
  Routes, Router, Route,
  BrowserRouter
} from "react-router-dom";
import Mainlayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Categories from './pages/Categories'
import AuthLayout from './layout/AuthLayout'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/categories' element={<Categories   />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
