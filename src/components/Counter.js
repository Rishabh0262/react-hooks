import React,{useState} from 'react'

function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    const isEven = () => {

        // delaying code 
        let i = 0
        while (i < 900000000) i++



        // if (count1 % 2 === 0)
        //     return true
        // else 
        //     return false

        return count1 % 2 === 0    // Both "returns" work fine.
    }

    
  return (
    <div>
        <button onClick={increment1} > count-1 : {count1}</button>
        <span>{isEven() ? "Even" : "Odd"} </span>

        <br></br>
        <button onClick={increment2} > count-2 : {count2}</button>
    </div>
  )
}

export default Counter