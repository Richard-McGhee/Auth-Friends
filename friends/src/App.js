import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute'

function App() {
  const logOut = () => {
    localStorage.clear()
  }
  return (
    <div>
      <Link to='/home'>
        <h1>Home Page</h1> 
      </Link>
      <Link to='/home' onClick={logOut}>
        <h1>Log Out</h1>
      </Link>
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/addFriend' component={FriendForm} />
        <PrivateRoute path='/friends' component={FriendList} />
      </Switch>
    </div>
  );
}

export default App;
