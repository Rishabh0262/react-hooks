// Creating a custom hook that basically updates the document title.
// 1st we will create a counter & set the Document-title as we normally would without any custom-Hook
// we'll see how to extract the logic into a custom-Hook.
import React, {useState, useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitle1() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // },[count])

    useDocumentTitle(count)


  return (
    <div>
        <button onClick={() => setCount(count + 1)} >Count - {count}</button>
    </div>
  )
}

export default DocTitle1