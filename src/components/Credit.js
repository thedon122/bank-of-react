import React, { Component } from 'react';

class Credit extends Component {
    render() {
        console.log(this.props.credits)
      const creditArray = this.props.credits
        const display = creditArray.map((banana)=> {
          
           banana[1]
        })
        console.log(creditArray[1])
        return (
            
            <div>
                {display}
            </div>
        )
    }
}

export default Credit