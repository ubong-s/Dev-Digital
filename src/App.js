import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error';
import Home from './pages/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='*' exact component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
