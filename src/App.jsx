import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/home'
import Login from './components/login'
import Blog from './components/Blog'
import Post from './components/Post'
import About from './components/About'
import Careers from './components/Careers'
import Chatbot from './components/ChatBot'
import Contact from './components/Contact'
import Team from './components/Team'
import Research from './components/Research'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
function App() {
 

  return (
  
     
    <>
    <Router>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/ChatBot' element={<Chatbot/>} />  
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/research" element={<Research/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/terms" element={<Terms/>}/>
          </Routes>
        </Router></>
  )
}

export default App