import React, { Component } from 'react';

class Debit extends Component {
    render() {
        console.log()
      const debitArray = this.props.debit
        const debitList = debitArray.map((banana)=> {
          
           banana
        })
        console.log(debitArray[0])
        return (
            
            <div>
                {debitList}
            </div>
        )
    }
}

export default Debit