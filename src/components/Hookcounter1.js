import React, {useEffect, useState, } from 'react'

function Hookcounter1() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

     
//   ******* There is no such functions in RFCE ********
    // componentDidMount() {
    //     document.title = `Clicked ${this.state.count} times`
    // }




    // useEffect Hook behaives like a function.  USE : for causing Side-effects 
    // It executes after 1st render & after every-update.
    useEffect(() => {
        console.log("useEffect - updating project title.")       // The same issue that has been faced in RCE(ClassCounter1.js). It re-renders for any change in <input> field
        document.title = `clicked ${count} times`
    }, [count])                                                  // solution : for the above issuse. we added another parameter i.e, an Array listing those useState who we want for which it be executing. 
    


  return (
    <div>
        <input 
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}

        />
        <button onClick={() => {setCount(count + 1)}} >clicked {count}</button>
    </div>
  )
}

export default Hookcounter1