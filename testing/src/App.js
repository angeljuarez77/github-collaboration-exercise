import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
