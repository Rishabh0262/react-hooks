import React, {useState} from 'react'

function UserForm() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${fname} ${lname}`)       

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name : </label>
                <input type='text' value={fname} onChange={e => setFname(e.target.value)} />

            </div>

            <div>

                <label>Last Name : </label>
                <input type='text' value={lname} onChange={e => setLname(e.target.value)} />
            </div>
            
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm