// Objective : Create an interval Once and Destroy it once.

import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count , setCount] = useState(0)

    const tick= () => {
        console.log("tick() called!" + count)
        setCount(count + 1)
    }

    /*                          ..... #4 .....   
    const doSomething() {
            console.log(someProp)           // we use defined a function. and used a "someState"  while called @1
    } 
    */

    // This Effect will fire after every render.
    useEffect(() => {
        // @1 :       doSomething();          
        //  instead, we must declare  the function inside the ________  useEffect. 

        // So, to remember to add dependency of the prop or State to the 


        console.log("useEffect to setInterval called!")

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)    // #2 As for avoiding memory-leakage ... similar to CompWillUnmount in RCE
        }

    }, [count])     // #1 empty dependency array, as we want to set-up only once ... similar to compDidMount in RCE
   
   
    /*
***********************               #3                ********************************************

Dependency Array : a way to let React know about everything the effect must watch for the changes.
    SOLUTION : Since the we want Effect to lookou for change in Count. So we need to include that.

    Alt. Sol. :  If we wanted to implement the same with an EMPTY DEPENDENCY ARRAY.

                const tick= () => {
                    setCount(prevCount = prevCount + 1)
                }

*/



  return (
    <div>
        <h2>Hook Count : {count}</h2>
    </div>
  )
}

export default IntervalHookCounter
