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
  return (
    <div>
        <button onClick={increment1} >count-1 : {count1}</button>

        <br></br>
        <button onClick={increment2} >count-2 : {count2}</button>
    </div>
  )
}

export default Counter