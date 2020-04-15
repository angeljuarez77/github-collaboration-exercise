import React from 'react';
import Articles from './components/Articles'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <Articles/>
      </div>
    );
  }
}

export default App;
