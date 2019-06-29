import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/Layout/Navbar';
// import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="spa-container">
        <NavBar />
      </div>
    </BrowserRouter>
  )
}

export default App;
