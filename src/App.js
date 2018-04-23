import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import axios from 'axios'

class App extends Component {
  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: "Jackson",
      memberSince: 1929
    },
    debits: []
  }

  componentDidMount = () => {
    console.log("Component did mount called")
    this.getDebits()
  }

  getDebits = () => {
    console.log("Get debits called")
    axios.get('http://localhost:4000/debits')
    .then((response) => {
      console.log('Debits: ', response.data)
      this.setState({debits: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => {
    return <Home accountBalance={this.state.accountBalance}/>
    }

    const UserProfileComponent = () => <UserProfile currentUser={this.state.currentUser} 
    accountBalance={this.state.accountBalance}/>
    
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent}/>
          <Route exact path='/userprofile' render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
