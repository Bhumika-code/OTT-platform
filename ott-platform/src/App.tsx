import React from 'react';
import './App.css';
// import Routes from './routes/routes';
import Routings from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routings />
    </Router>
    </div>
  );
}

export default App;
