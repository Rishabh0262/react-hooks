import React, {useReducer, useEffect} from 'react'
import axios from 'axios'


// #1  initialise 'initialState' ... that I suppose works like, a variable stores Objects.
//      as properties of single object.
const initialState = {
    loading : true,
    error : "",
    post : {}
}

// #2  reducer-function takes [state, action] as an argument & RETURNs Updated State-values.
const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS" :
            return {
                loading : false,
                error : "",
                post : action.payload
            }
        case "FETCH_ERROR" :
            return {
                loading : false,
                error : "Something went wrong!",
                post : {}
            }
        default :
            return state
    }
}


function DataFetching2() {

// # 3  Invoking useReducer & useEffect    
    const [state, dispatch] =    useReducer(reducer, initialState)

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type : "FETCH_SUCCESS", payload : response.data })   // we need to `dispatch` 'TYPE' & 'PAYLOAD' as an object
        })
        .catch(error => {
            dispatch({type : "FETCH_ERROR"})          // we need to `dispatch` 'TYPE' as an object.
        })
    },[])



// #4  specify the JSX. Here we need to append 'state' on every #1 object-property
  return (
    <div>
        {state.loading? "loading..." : state.post.title}
        {state.error? state.error : null}
    </div>
  )
}

export default DataFetching2