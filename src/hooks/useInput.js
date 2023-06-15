import {useState} from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
    
  const reset = () => {
    setValue(initialValue)
  }

  const bind = {
    value : value,
    // value, // value : value        ... ES6 short hand syntax
    onchange : e => {
      setValue(e.target.value)
    }
  }

  return [value, bind, reset]
}

export default useInput