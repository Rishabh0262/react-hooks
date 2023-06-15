import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    // const [fname, setFname] = useState('')
    // const [lname, setLname] = useState('')

    const [firstname, bindFname, setFname] = useInput('f')    // here ('') empty-string is, initial-value is passed on the Custom-Hook
    const [lastname, bindLname, setLname] = useInput('l')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)   
        setFname()
        setLname()    

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name : </label>
                {/* <input type='text' value={fname} onChange={e => setFname(e.target.value)} /> */}
                <input type='text' {... bindFname} />

            </div>

            <div>

                <label>Last Name : </label>
                {/* <input type='text' value={lname} onChange={e => setLname(e.target.value)} /> */}
                <input type='text' {... bindLname} />
            </div>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm


 