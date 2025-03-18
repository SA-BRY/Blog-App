

import './App.css'
import Login from './views/Login'
import Signup from './views/Signup'
import Main from './views/Main'


import { BrowserRouter , Routes , Route } from 'react-router-dom'
import React from 'react'

function App() {

  const[loginState,setLoginState]=React.useState(false)


React.useEffect(()=>{
  const check = window.localStorage.getItem("login")
  setLoginState(check)

},[loginState])

  return (
    <>


    <BrowserRouter>
      <Routes>
      <Route path='/' element={loginState? <Main/> : <Login/> }/> 
        <Route path='/Login' element={loginState? <Main/> : <Login/> }/> 
        <Route path='/Main' element={loginState? <Main/> : <Login/> }/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>




    
    </>
  )
}

export default App
