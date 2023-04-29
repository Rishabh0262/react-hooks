import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching() {

    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                // console.log(res.data[0].title)

                // setPosts(res.data)          // Error : Data keeps fetching more than once. Which it should not be happening.
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    // }, [])        // Solution : Empty Dependency is passed as the parameter.

    }, [idFromButtonClick])       // as in fetching data ID is dependent.
    

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleClick} >fetch data</button>
        {/* <ol>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
             
        </ol> */}
        <h3>{post.title}</h3>
    </div>
  )
}

export default DataFetching