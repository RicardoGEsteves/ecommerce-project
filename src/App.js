import React from 'react';

import style from './app.module.scss';
import Home from './pages/home/Home';

function App() {
  return (
    <div className={style.app}>
      <Home />
    </div>
  );
}

export default App;
