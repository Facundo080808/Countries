import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
//import './App.css'
import Landing from './views/Landing/Landing'
import { BrowserRouter as Router , Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home/>}/> 
        <Route path="/home/:id" element={<Detail/>}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
//"https://react.dev"
//"https://vitejs.dev"