import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div>
      <Link to='/home'>
          <h1>Home Page</h1>
        </Link>
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/addFriend' component={FriendForm} />
      </Switch>
    </div>
  );
}

export default App;
