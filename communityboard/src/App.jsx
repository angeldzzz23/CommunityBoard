import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Favorites from './components/Favorites'

import reactLogo2 from './assets/awning.png';

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <h1>Professions</h1>
        <img src={reactLogo2} alt="" />
      </div>

     <Favorites />

      
    </div>
  )
}

export default App