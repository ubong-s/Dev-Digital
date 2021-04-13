import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ToTop from './components/ToTop';

import Error from './pages/Error';
import Home from './pages/index';

function App() {
  const location = useLocation();

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={Home} />
        <Route path='*' exact component={Error} />
      </Switch>
      <ToTop />
      <ScrollToTop />
    </>
  );
}

export default App;
