import React, {useEffect, useState, } from 'react'

function Hookcounter1() {

    const [count, setCount] = useState(0)
     
//   ******* There is no such functions in RFCE ********
    // componentDidMount() {
    //     document.title = `Clicked ${this.state.count} times`
    // }


    // useEffect Hook behaives like a function.  USE : for causing Side-effects 
    // It executes after 1st render & after every-update.
    useEffect(() => {
        document.title = `clicked ${count} times`
    })

  return (
    <div>
        <button onClick={() => {setCount(count + 1)}} >clicked {count}</button>
    </div>
  )
}

export default Hookcounter1