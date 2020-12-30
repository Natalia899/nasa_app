import './App.css';
import React from 'react';
import Container from './components/container/Container'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter as Router} from 'react-router-dom'

export default function App() {
  return (
    <Router>
<div className='mainContainer'>
  <NavBar />
  <Container />
</div> 
    </Router>
  )
   
}

