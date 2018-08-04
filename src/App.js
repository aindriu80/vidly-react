import Counters from './components/counters';
import React, { Component } from 'react';
// import Movies from './components/movies';
import Navbar from './components/nav-bar';
import './App.css';

class App extends Component {
  render() {
    return (
      // <main className="container">
      //   <Movies />
      // </main>
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
