

import './App.css'
import Login from './views/Login'
import Signup from './views/Signup'
import Main from './views/Main'


import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>


    <BrowserRouter>
      <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>




    
    </>
  )
}

export default App
