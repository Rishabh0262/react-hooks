import React from 'react'
import useInput from '../hooks/useInput'

function UserForm1() {

    const [fname, bindFname, resetFname] = useInput('')
    const [lname, bindLname, resetLname] = useInput('')

    const submitHandler = e => {
        e.preventDefault() 
        alert(`Hello ${fname} ${lname}`)
        resetFname()
        resetLname()

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name : </label>
                <input {... bindFname} type='text' />
            </div>
            <div>
                <label>Last Name : </label>
                <input {... bindLname} type='text' />
            </div>

            <button> Submit </button>
        </form>
    </div>
  )
}

export default UserForm1


