import React from 'react';
import { Switch, Route } from 'react-router-dom';
{/*Switch is now changed to Routes*/}


import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        {/*Component has been change to element and is used like this: element={<HomePage />}*/}
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
