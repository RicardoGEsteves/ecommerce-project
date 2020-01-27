import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.scss';
import Header from './components/header/header';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
