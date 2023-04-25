import React, { useState } from 'react'

function HookCounter3() {
    const [name, setName] = useState({ firstname: '', lastname: '' })



    return (
        <div>
            <input 
                type='text' 
                value={name.firstname} 
                onChange={e => setName({firstname : e.target.value})} 
            />

            <input type='text' 
                value={name.lastname}
                onChange={e => setName({lastname : e.target.value})}
            />

            <h2>Your firstname is -  {name.firstname}</h2>
            <h2>Your lastname is -  {name.lastname}</h2>
<br/><br/>
<br/><br/>

            Here we are using "JSON.stringify(name)" to get the real time values with 'useState' Hook!
            <h2>{JSON.stringify(name)}</h2>
            <br/><br/>
            <br/>
            ERROR : We are facing the issue that, if <i> we write firstname , lastname disappears  & vice-versa! </i>
<br/><br/>
                    Bcoz. <b> useState doesn't </b> automatically 'merge' & 'update' object
                    <br/>
            setState : will <i>merge the state.</i>
            <br/> where as, <br/>
            useState : will <b>not</b>





    </div >
  )
}

export default HookCounter3