import React, { Component } from 'react'
import { UserContext } from '../App'
export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
            {
                user => {
                    return <div>Hello there, User context value {user} </div>
                }
            }
             
        </UserContext.Consumer>
      </div>
    )
  }
}

export default ComponentF