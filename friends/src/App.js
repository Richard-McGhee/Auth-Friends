import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login';

function App() {
  return (
    <div>
      <Link to='/home'>
          <h1>Home Page</h1>
        </Link>
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
