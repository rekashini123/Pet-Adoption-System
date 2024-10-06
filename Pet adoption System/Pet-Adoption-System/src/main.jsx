import React from 'react'
import ReactDOM from 'react-dom/client'
import Loginpage from './Components/Loginpage.jsx'
import './index.css'
// import HomePage from './Components/Landingpage/Landing.jsx'
import Signuppage from './Components/Signuppage.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Formpage from './Components/Adoptionform/Form.jsx'
import Landingpage from './Components/Landingpage/Landing.jsx'
import Homepage from './Homepage.jsx'
import Details from './Components/Adoptionform/Details.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/Homepage' element={<Homepage/>}/> 
      <Route path='/Details' element={<Details/>}/> 
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/Signuppage' element={<Signuppage/>}/>
      <Route path='/Loginpage' element={<Loginpage/>}/>
      <Route path='/Form' element={<Formpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
