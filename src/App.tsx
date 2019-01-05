import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/header';

import { Home } from './pages/home';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact={true} path='/' component={Home} />
    </div>
  </Router>
);

export default App;
