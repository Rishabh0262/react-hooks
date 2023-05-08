// using useState & useEffect-Hook to fetch Data 
import React,{useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching1() {
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState('')
     const [post, setPost] = useState({})

     useEffect (() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')    // it will show error msg if we write wrong url.
        .then(response => {
            setLoading(false)
            setError('')
            setPost(response.data)
        })
        .catch(error => {
            setLoading(false)
            setError("Something went wrong!")
            setPost({})
        })
     }, [])

  return (
    <div>
        {loading? "loading..." : post.title}
        {error? error : null}
    </div>
  )
}

export default DataFetching1