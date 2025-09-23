import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from "./pages/home"
import About from './pages/aboutUs'
import Courses from './pages/courses'
import LogIn from './pages/login'
import Scholarship from './pages/scholarship'
import Contact from './pages/contactUs'
import SignUp from './pages/signup'
import AboutUs from './pages/aboutUs';
import OTPPage from './pages/otp';
import ForgetPassword from './pages/forgetpassword';
import Form from './pages/form';
import Success from './components/success';
import Teachers from './pages/teachers';
import Mine from './pages/mine';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route index element = {<Home/>} />
              <Route path ='/home' element = {<Home/>} />
              <Route path ='/courses' element = {<Courses/>} />
              <Route path = '/about' element = {<About/>} />
              <Route path = '/scholarship' element = {<Scholarship/>} />
              <Route path = '/contact' element = {<Contact/>} />
              <Route path = '/login' element = {<LogIn/>} />
              <Route path = '/signup' element = {<SignUp/>} />
              <Route path ='/aboutUs' element = {<AboutUs/>} />
              <Route path ='/otp' element = {<OTPPage/> }/>
              <Route path ='/forgetpassword' element = {<ForgetPassword />} />
              <Route path ='/form' element = {<Form/> }/>
              <Route path ='/success' element = {<Success/>}/>
              <Route path ='/teachers' element = {<Teachers />}/>
              <Route path ='/mine' element = {<Mine/>} />
              
              
        </Routes>


      </BrowserRouter>
      

    </>
  )
}

export default App