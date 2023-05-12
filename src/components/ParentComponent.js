import React,{useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function ParentComponent() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)



// useCallback-Hook : Now we've passed the Arrow-function as parameter to useCallback()
    //  Now in both the cases we return the "CAST" function, which is then passed as the "PROP" to the child component.

    const incrementAge = useCallback(() => {                 //  use of useCallback-Hook
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {                //  use of useCallback-Hook
        setSalary(salary + 1000)
    }, [salary]) 
    

  return (
    <div>
        <Title  />
        <Count text='Age' count={age}  />
        <Button handleClick={incrementAge} > Increment Age </Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={incrementSalary} > Increment Salary </Button>
    </div>
  )
}

export default ParentComponent