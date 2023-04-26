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




