import { UserContext } from '../App'
import { ChannelContext } from '../App'

import React from 'react'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (

                        <ChannelContext.Consumer>
                            {
                                channel => {

                                    return <div>Hello there, User context value is {user} & Channel context value is {channel} </div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
             
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF