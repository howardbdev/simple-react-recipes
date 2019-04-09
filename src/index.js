import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

// ******** probably move this to another file **************
const initialState = {
  recipes: [],
  myName: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RECIPES_SUCCESS":
      return {
        ...state,
        recipes: action.recipes
      }
    default:
      return state;
  }
}
// ************ and export it from there, import it here *****

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(thunk)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
