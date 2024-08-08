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
import { useTheme } from './components/theme-provider.jsx'
import { Toaster } from 'react-hot-toast';

const App = () => {

  const { theme } = useTheme();
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path='/categories' element={<Categories />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Route>
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            className: '',
            style: {
              borderRadius: "20px",
              background: theme === "dark" || theme === "system" ? "#3b3b3b" : "",
              color: theme === "dark" || theme === "system" ? "#fff" : "",
            }
          }}
        />
      </BrowserRouter>
    </>
  )
}

export default App
