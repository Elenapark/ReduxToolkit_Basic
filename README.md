# React Redux Toolkit Tutorial

## Learn Modern Redux

- make store with redux toolkit and connect it to the app wrapping App component in the index.js.
- make counterSlice for counter example (initialState, reducers for actions) and put counterSlice into store.
- make Counter Component and dispatch actions of reducers for counter features
  - Reducers are pure JS functions which take in two things: previous state and an action. Then they reduce it (it means return) to one entity: the new updated instance of state.

## React Redux Example Project with Redux Toolkit

- make simple react bulletin board app and manage the global state with redux toolkit
- react toolkit usese immerJS under the hood which allows you to write JS code where you would normally be mutating the state but it's not mutating the state : but only works inside of createSlice function of redux toolkit.
- makes reducer / prepare callbacks for our post added reducer funtions in postSlice.js : when dispatch, our addPostForm component doesn't need to the structure of the state at all. because all of that is now handled inside of the postSlice.js
