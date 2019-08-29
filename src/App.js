import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from './Routes';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
