import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'

class Home extends Component {
    render() {
    return (
        <div>
            <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/userprofile">User Profile</Link>
            

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
    }
}

export default Home;