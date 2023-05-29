import React, { Component } from 'react'

export class ClassTimer extends Component {

// #1 Create an instance field.[class propert, which will point to interval timer.]
    interval

// #2 Create a state var. 'timer' with val. '0'.    
    constructor(props) {
      super(props)
    
      this.state = {
         timer : 0
      }
    }
 
// #3 Setting interval in CDM() for increment in every second.
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({timer : prevState.timer + 1}))
        }, 1000)
    }


// #4 Clearing the Interval at the time of unmounting.
    componentWillUnmount() {
        clearInterval(this.interval)
    }


  render() {
    return (
      <div>
        Timer - {this.state.timer}
        <br></br>
        <button onClick={() => clearInterval(this.interval)}>Clear Interval</button>
      </div>
    )
  }
}

export default ClassTimer