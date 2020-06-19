import React from 'react';
import 'assets/scss/style.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from 'pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage}></Route>
      </Router>
    </div>
  );
}

export default App;
