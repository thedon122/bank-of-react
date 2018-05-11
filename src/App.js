import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import Debit from './components/Debit'
import Credit from './components/Credit'
import axios from 'axios'

class App extends Component {
  state = {
    accountBalance: 14568.27,
    currentUser: {
      userName: "Jackson",
      memberSince: 1929
    },
    credits: [],
    debits: []
  }

  componentDidMount = () => {
    console.log("Component did mount called")
    this.getCredits()
    this.getDebits()
  }

  getCredits = () => {
    console.log("Get credits called")
    axios.get('http://localhost:4000/credits')
      .then((response) => {
        console.log('Credits: ', response.data)
        this.setState({ credits: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  getDebits = () => {
    console.log("Get debits called")
    axios.get('http://localhost:4000/debits')
      .then((response) => {
        console.log('Debits: ', response.data)
        this.setState({ debits: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

getAccountBalance = () => {
  console.log("This is the account Balance")
  
}
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  render() {

    const HomeComponent = () => {
      return <Home accountBalance={this.state.accountBalance} />
    }

    const UserProfileComponent = () => <UserProfile currentUser={this.state.currentUser}
      accountBalance={this.state.accountBalance} />

    const debitComponent = () => <Debit debits={this.state.debits} />
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const creditComponent = () => <Credit credits={this.state.credits} />

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent} />
          <Route exact path='/userprofile' render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/debit" render={debitComponent} />
          <Route exact path="/credit" render={creditComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
