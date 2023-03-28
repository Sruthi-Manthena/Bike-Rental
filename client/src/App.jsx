import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </Router>
    </>

  )
}

export default App
