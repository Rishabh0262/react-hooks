# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






























# ************ NEED OF HOOKS ************

###        Reason Set 1 :
          *  `this` keyword works differently in JS. So, understand how it works.
          *  Remember to bind event handlers in class component
          *  Classes don't minify very well & make hot reloading very unreliable
           
        
###        Reason Set 2 :
          *  There is no particular way to Reuse stateful component logic
          *  HOC & render prop method, do solve/address this problem.
          *   (but makes the code hard to follow)
          * 
          *   So, that's why there is a need to share a needful Logic in better way.
          * 
      

###        Reason Set 3 :
          *  Related code is not organised at one place.
                  eg. : create component for complex scenarios such as [Data fetching and subscribing to events]

          *  Ex : Data fetching : in componentDidMount & componentDidUpdate
          *  Ex : Event listeners : in componentDidMount & componentDidUnmount
        *  { means both the above examples are implemented in "componentDidMount", which completely different from each other.} 
          *
          * 
          * 
          * 
          * Because of stateful - Cannot break component into smaller ones
            
-------------------------------------------------------------------------------------------------------------------------------------------------------------------






# ************************************************  useState Hook  ********************************************************
            
##                  // ********** Branches Chronological order ***********
          
                Master
                useStateHook        +        (useState-with-prev-state)
                useState-with-object
                useState4-with-array
            






#                *********** summary *********

                The useState hook let you add state in functional components.

                In classes, state is always an object.

                With useState hook, the state doesn't have to be an object

                The useState hook returns an array with 2 elements :
                * 1st element is current-value of state 
                * 2nd element is a state-setter fucntion

                If New state value depends on previous state value? you can pass a fucntion to the setter function.

                When dealing with objects or arrays, always make sure to spread state-Variable then call the setter function.






-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useEffect Hook  ********************************************************

          the Effect Hook let you perform *side effect* in "functional component".

          It is close replacement of componentDidMount, componentDidUpdate & componentWillUnmount




-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useContext Hook  ********************************************************
    "Context provides a way to pass to pass data through the component tree without having to pass props manually at every level!"

          Context is basically used for passing the 'props' in the heirarchy of the component.
          Which makes the code dirty and complex.
          Restricts the code to be Scalable.

        <ComponentC>                       // if we pass a {prop} in 'C' & we want to access it in 'F'. We've to mannually add on every Component declaration.
              |
              |->  <ComponentE>
                          |
                          |->  <Componentf>


### STEPs  for using Regular 'Context' in RFCE or RCE
    Step 1 : Create a context.

    Step 2 : Wrap the <Component /> within the <Context.Provider value={to-be-passed}>

    Step 3 : Consume the Context-value.

##  STEPs for using 'useState-Hook'

    Step 1 & 2 : same as before.

    Step 3 : Consuming the Context

             (a) : Import useContext-Hook.
             (b) : Import ... all the context, Those are need to be used.
             (c) : Just use ... `useContext()` & pass <context-name from (b)> .  Store the value in a Var. for individual-Context











-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useReducer Hook  ********************************************************
    " useReducer is a hook that is used for State management in React.js . "
    Alternative for "useState, Moreover it is related to *reducer Functions*.
    
    useReducer >>> useState : means "useState" is build on "useReducer"

###     useReducer(<reducer-funcName> , initialState).

###               reducer(currentState , action )

______________________________________________________________________________________________________________
##               reduce in JS                      v/s                useReduce in React
--------------------------------------------------- |  -------------------------------------------------------------------
1.  array.reduce(reducer, initialValue)             |     useReduce(reducer, initialState)
                                                    |
2.  singleValue = reducer(accumulator, itemValue)   |     newState = reducer(currentState, action)
                                                    |
3.  reduce method returns a single value            |     useReducer returns a pair of values. 
                                                    |         [newState, dispatch]
                                                    |
______________________________________________________________________________________________________________





##  STEPs for using 'useReducer-Hook'

    Step 1 : Defining initialState value.
    Step 2 : Defining the "reducer-Function".         // the Function i.e, passed as 1st parameter to the useReducer-Hook.

    Step 3 : 





###                 useState      v/s          useReducer

_____________________________________________________________________________________________________________________________________________________________
##  Scenario                |              useState                                    v/s                useReducer
--------------------------  |  ------------------------------------------------------   |  ------------------------------------------------------------------
1.  Types of state          |    primitive type (no. / str/ boolean)                    |          Object or Array
--------------------------  |  ------------------------------------------------------   |  ------------------------------------------------------------------
2.  Number of state         |    1 or 2        *Don't use it*                           |            5 or 10 seperate setState calls                           
       transition           |                                                           |     [because it makes state-transition predictable]
                            |      "If there is a lot of setState/setSession calls      |  We would be updating several-states But all these will be in 1 
                            |                                                           |    place i.e, reducer-function.
                            
--------------------------  | -------------------------------------------------------   |  ------------------------------------------------------------------
3.  Related State           |  No, {in example, rh4-useReducer4-fetching-data we had    |    YES , {But actually useReducer is better as State-transitions 
     transition             |  3 states. It seems good to use useState} if everything   |  are all realated or tied to specific action (all 3 stateVar  
                            |  were to be managed at different places. It gets Harder   |   updated together on Data-fetched successfully or gets ERROR)}

--------------------------  | -------------------------------------------------------   |  ------------------------------------------------------------------
4.  Bussiness Logic         |       No bussiness logic                                  |  Complex Bussiness Logic, { if state-Transition needs old-value to
                            |                                                           |   new-value requires some biz. Logic & complex Data-xformation &
                            |                                                           |      manipulation}

--------------------------  | -------------------------------------------------------   |  ------------------------------------------------------------------
5. Local v/s Global State   |   Local , if we want a local component state              |    Global ,  {If we want to maintain global state That can be 
                            |     {Scenaio explained in these braces on useReducer}     |         altered by the Components deep in the Comp-Tree.}
                            |   We will have to pass multiple update Func. 1 for each   |   it is the better option.
                            |   state.                                                  |   Ofcourse, we'll use useContext but including useReducer is
                            |                                                           |   advantagious.
                            |                                                           |     We simply have to pass 1 "Dispatch-Method" down the comp-tree.
                            |                                                           |   this 1 "dispatch-Method" can update several state-var based on action type.
_____________________________________________________________________________________________________________________________________________________________














-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useCallback Hook  ********************************************************
### what
    "useCallback is a Hook that returns a memoized version of callback function that only changes if 1 of the dependencies has changed."

### why
    "It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders." 


    It prevents re-rendering of the unrelated components, It can provide drastic performance optimization, 
    when we are having 20, 30, 50 or more component then re-rendering can cause performance issues.

## why we should NOT use useCallback-Hook all the time?!
        https://kentcdodds.com/blog/usememo-and-usecallback
















-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useMemo Hook  ********************************************************

    "

        useMemo is a Hook that will only recompute the cached value when 1 of the dependencies is changed.
        This optimization heads to avoid expensive calculation on every render.

    "

    Working is similar to how useCallback works.

    We want to tell the react to not to recalculate certain values unnecessary specially the one which takes a long time to compute
    [isEven() should not trigger, if counter2 is clicked] 

    1st value in useMemo() : the function whose return value needs to be cached.
    [here we are going to use, the Arrow-Function. whose "return" value needs to be cached.]

    2nd arguments : We need to specify dependancies. [here it depends on the value of "counter1".]

    3rd Step : useMemo returns to a "cached" value. which we are going to assign to "isEven".

    Last : Now remove the Function call. As it is now a variable.













-------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ************************************************  useRef Hook  ********************************************************

    "
        This hook makes it possible to 'Access DOM nodes' directly within functional Component
        e.g. : Focusing the text-input 
    "
### STEPs

#1     import 'useRef' from react
#2     create a 'useRef' variable ... assign it to null.
#3      using the 'useRef-variable' at the appropiate position.
(Current is a property comes from React,  The ref's current property to the corresponding DOM node)

#4   implementing the DOM manipulation. In 'useEffect'.




## 2nd usage of useRef-Hook
[HookTimer.js]

It can be used to create a Generic container which can hold a mutable value similar to instance properties on a RCE(class Comp.)



Fact : Although useRef can hold the Reference to a DOM node using 'ref' attribute.
         It can also be used to store any mutable value & the value persist through the re-renders. While also not causing any additional renders when its value changes.

    This generic containers does not cause re-renders when data it stores changes.

    At the same time, it also remembers the stored data even after the other state var. caused a re-render of this component.

