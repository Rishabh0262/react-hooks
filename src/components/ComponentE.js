// *******   3 Steps to consume Context value, via "useContextHook"  ***********

import React, {useContext} from 'react'       // Step 1
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'     // Step 2


function ComponentE() {
// .........................  Step 3 ....................
    const user = useContext(UserContext)
    const Channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {Channel}
        
        <ComponentF />
    </div>
  )
}

export default ComponentE