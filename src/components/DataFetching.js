import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                // console.log(res.data[0].title)

                setPosts(res.data)          // Error : Data keeps fetching more than once. Which it should not be happening.
            })
            .catch(err => {
                console.log(err)
            })
    }, [])        // Solution : Empty Dependency is passed as the parameter.
                
    

  return (
    <div>
        <ol>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
             
        </ol>
    </div>
  )
}

export default DataFetching