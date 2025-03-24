

import './App.css'
import Login from './views/Login'
import Signup from './views/Signup'
import Main from './views/Main'
import Home from './views/Home'
import Inbox from './views/Inbox'
import Profile from './views/Profile'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import React from 'react'


function App() {



  return (
    <>


    <BrowserRouter>
      <Routes>
      <Route path='/' element= {<Login/> }/> 
        <Route path='/Login' element={<Login/> }/> 
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Main' element={ <Main view={<Home/>}/> }/>
        <Route path='/Inbox' element= {<Main view={<Inbox/>}/>}/>
        <Route path='/Profile' element= {<Main view={<Profile/>}/>}/>

      </Routes>
    </BrowserRouter>




    
    </>
  )
}

export default App
