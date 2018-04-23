import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
            <div>Account Holder: {this.props.accountHolder}</div>
            <div>Balance: {this.props.accountBalance}</div>
        </div>
    );
  }
}

export default AccountBalance;