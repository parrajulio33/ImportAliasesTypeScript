import React from 'react';
import './App.css';

// import State from './util/State';
// import Endpoints from './util/Endpoints';
// import Sharedcommon from './app/common/Sharedcommon';
import State from '@util/State';
import Endpoints from '@util/Endpoints';
import Sharedcommon from '@common/Sharedcommon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Import  Aliases paths!!!</h1>
        <State />
        <Endpoints />
        <Sharedcommon />
      </header>
    </div>
  );
}

export default App;
