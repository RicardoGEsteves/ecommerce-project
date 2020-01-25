import React from 'react';
import { Switch, Route } from 'react-router-dom';

import style from './app.module.scss';
import Home from './pages/home/Home';

const Adventure = () => {
  return <h1>hey</h1>;
};

function App() {
  return (
    <div className={style.app}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/adventure' component={Adventure} />
      </Switch>
    </div>
  );
}

export default App;
