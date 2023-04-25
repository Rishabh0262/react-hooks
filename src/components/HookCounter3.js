import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <input
        type="text"
        value={name.firstname}
/* #1 */        onChange={(e) => setName({ ...name, firstname: e.target.value })}      // we needed to use the '...' : SPREAD OPERATOR, followed by the objectName. 
                                                                                    // which brings all the data from the objects. then change the one or more attribute *Manually*
      />
      <input
        type="text"
        value={name.lastname}
/* #1 */        onChange={(e) => setName({...name, lastname: e.target.value })}      // // we needed to use the '...' : SPREAD OPERATOR --- blah blah blah --- " "
      />
      <h2>Your firstname is - {name.firstname}</h2>
      <h2>Your lastname is - {name.lastname}</h2>
      <br />
      <br />
      <br />
      <br />
      Here we are using "JSON.stringify(name)" to get the real time values with
      'useState' Hook!
      <h2>{JSON.stringify(name)}</h2>
      <br />
      <br />
      <br />
      ERROR : We are facing the issue that, if{" "}
      <i> we write firstname , lastname disappears & vice-versa! </i>
      <br />
      <br />
      Bcoz. <b> useState doesn't </b> automatically 'merge' & 'update' object
      <br />
      setState : will <i>merge the state.</i>
      <br /> where as, <br />
      useState : will <b>not</b>
      <br></br>
{/* #1 */} Resolution : manually. Using <b> '...' = 'spread operator' </b>{" "}
      while <i><b> setState() call </b></i> .
    </div>
  );
}

export default HookCounter3;
