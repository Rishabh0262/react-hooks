import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x : 0,
         y : 0
      }
    }

    logMousePositon = e => {
        this.setState({x : e.clientX, y : e.clientY })
    }

    componentDidMount() {
        window.addEventListener("mousemove", this.logMousePositon )
    }

    /*  There are issues in <MouseContainer /> where 
    
    componentWillUnmount () {
        window.removeEventListerner("mousemove" , this.logMousePosition)
    }

    */

//    ************ Ignore, just tried to check *************
    // componentDidUpdate() {
    //     window.addEventListener("mousemove", this.logMousePositon )
    // }

  render() {
    
    return (
      <div>
        X - {this.state.x}, Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse