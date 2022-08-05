import React, { useState } from 'react';
import './App.css';
import Interface from './components/Interface';

function App() {

  const [status, setStatus] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Interface status={status} setStatus={setStatus}/>
      </header>
    </div>
  );
}

export default App;
