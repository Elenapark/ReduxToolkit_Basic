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
- add redux dev tools to browser
- add userSlice.js and author data to the each post.
- add date state in the postSlice.js using date-fns npm package and display passed time from the written time of each post.
- add reaction emoji to the post and make reactions added reducer functions to apply reaction

## React Redux Thunk Middleware in Redux Toolkit for Async Acions with Axios

- Redux Thunk Middleware is recommended as the standard approach for writing async logic with redux
- what does _Thunk_ mean ? a programming term that means 'a piece of code that does some delayed work'

![RTK Async Thunk Flow](public/images//rtk%20async%20flow.png)

- createAsyncThunk : make action that deals with async logic
  - fetchPost async thunk
  - fetchUsers async thunk
  - addNewPost async thunk
- add extraReducers and builder cases for async logic

## Blog App Project with React.js, Redux Toolkit CRUD Examples

- add routing to the app using react-router-dom V6
- make single post page using Link Component and useParams of react-router-dom
- make edit post form for update, delete post
  - updatePost async thunk
  - deletePost async thunk
- fix update post errors related to fake api issue
- dispatch post data at the top level
