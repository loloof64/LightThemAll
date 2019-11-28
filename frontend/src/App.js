import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
