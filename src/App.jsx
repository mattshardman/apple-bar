import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import SubNav from './components/SubNav';

function App() {
  return (
    <Router>
      <>
        <nav>
          <Nav />
          <Route path="/:id" component={SubNav} />
        </nav>
      </>
    </Router>
  );
}

export default App;
