import React,{useState, useMemo} from 'react'

function Counter() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(count1 + 1)
    }

    const increment2 = () => {
        setCount2(count2 + 1)
    }

    // 1st value in useMemo() : the function whose return value needs to be cached.
    // [here we are going to use, the Arrow-Function. whose "return" value needs to be cached.]
    // 2nd arguments : We need to specify dependancies. [here it depends on the value of "counter1".]
    // 3rd Step : useMemo returns to a "cached" value. which we are going to assign to "isEven".
    // Last : Now remove the Function call. As it is now a variable.

    const isEven = useMemo(() => {

        // delaying code 
        let i = 0
        while (i < 900000000) i++

        // if (count1 % 2 === 0)
        //     return true
        // else 
        //     return false

        return count1 % 2 === 0    // Both "returns" work fine.
    }, [count1])


  return (
    <div>
        <button onClick={increment1} > count-1 : {count1}</button>
        <span>{isEven ? "Even" : "Odd"} </span>

        <br></br>
        <button onClick={increment2} > count-2 : {count2}</button>
    </div>
  )
}

export default Counter