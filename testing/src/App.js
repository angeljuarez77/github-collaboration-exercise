import React from 'react';
import Articles from './components/Articles'
import './App.css';
import NavBar from './components/NavBar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>

        <Articles/>
      </div>
    );
  }
}

export default App;
