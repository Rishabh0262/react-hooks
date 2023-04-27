import React, { Component } from 'react'

export class ClassCounter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         text : ""
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("Updating Document title!")                // Here the problem is, it executes every time we type in input box
        document.title =   `Clicked ${this.state.count} times`
    }



  render() {
    return (
      <div>
        <input 
            type="text" 
            value={this.state.text} 
            onChange={e => this.setState({text : e.target.value})} 
        />
        <button onClick={()=> this.setState({count : this.state.count +1})}>count {this.state.count}</button>

        <br/> <br/>
        <b> Check Console log, </b> on every keystroke, it is executing which <b><i> should not be happening </i></b>.
      </div>
    )
  }
}

export default ClassCounter1