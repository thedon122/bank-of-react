import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'

class App extends Component {
  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: "Jackson",
      memberSince: 1929
    }
  }

  render() {

    const HomeComponent = () => {
    return <Home accountBalance={this.state.accountBalance}/>
    }

    const UserProfileComponent = () => <UserProfile currentUser={this.state.currentUser} />

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/userprofile' render={UserProfileComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
