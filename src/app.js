"use strict";
import { createStore } from "redux";

//IMPORT COMBINE REDUCER
import reducers from "./reducers/index";
//STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function() {
  console.log("current state is:", store.getState());
  //console.log("second book price is:", store.getState()[1].price);
});

//STEP 2 created and dispatch actions
store.dispatch({
  type: "POST_BOOK",
  payload: [
    {
      id: 1,
      title: "this is a book",
      description: " React books",
      price: 33.333
    },
    {
      id: 2,
      title: "this is a second book",
      description: " Redux  books",
      price: 66.66
    }
  ]
});

// Dispatch third books

store.dispatch({
  type: "POST_BOOK",
  payload: [
    {
      id: 3,
      title: "this is a third book",
      description: " React books",
      price: 33.333
    }
  ]
});

// Dispatch delete a book
store.dispatch({
  type: "DELETE_BOOK",
  payload: { id: 1 }
});

// Dispatch Update a book
store.dispatch({
  type: "UPDATE_BOOK",
  payload: { id: 2, title: "learn redux in 24h" }
});
