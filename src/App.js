import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <div id="colorlib-main">
            <LandingPage/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
