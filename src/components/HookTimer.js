import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };

    }, [])

// Fact : Although useRef can hold the Reference to a DOM node using 'ref' attribute.
//          It can also be used to store any mutable value & the value persist through the re-renders. While also not causing any additional renders when its value changes.
  return (
    <div>
        Hook Timer : {timer}
        <br />
        <button onClick={() => clearInterval(intervalRef.current)} >Clear Hook Timer</button>
    </div>
  )
}

export default HookTimer