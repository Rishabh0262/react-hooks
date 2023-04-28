import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    componentDidMount() { 
        this.interval = setInterval(this.tick, 1000)
     }

    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate() {
        clearInterval(this.interval)
    }

     tick = () => {
        this.setState({
            count : this.state.count + 1
        })
     }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default IntervalClassCounter