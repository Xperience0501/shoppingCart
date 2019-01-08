import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <MainBody />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;