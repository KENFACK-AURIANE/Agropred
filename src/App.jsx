import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Prediction from './pages/Prediction.jsx'
import "./index.css"

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
