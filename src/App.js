import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <Router>
          <div className="routes">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/members">Members</Link>
              </li>
              <li>
                <Link to="/constitution">Constitution</Link>
              </li>
              <li>
                <Link to="/rules">Rules</Link>
              </li>
              <li>
                <Link to="/bets">Bets</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/members" component={Members} />
            <Route path="/constitution" component={Constitution} />
            <Route path="/rules" component={Rules} />
            <Route path="/bets" component={Bets} />

          </div>
        </Router>
      </header>

    </div>
  );
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function About() {
  return (
    <h2>About Us</h2>
  )
}

function Members() {
  return (
    <h2>League Members</h2>
  )
}

function Constitution() {
  return (
    <h2>League Constitution</h2>
  )
}

function Rules() {
  return (
    <h2>League Rules</h2>
  )
}

function Bets() {
  return (
    <h2>League Bets</h2>
  )
}


export default App;
