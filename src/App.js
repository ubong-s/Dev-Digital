import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Error from './pages/Error';
import Home from './pages/index';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='*' exact component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
