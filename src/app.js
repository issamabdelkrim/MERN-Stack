"use strict";
import { createStore } from "redux";

//STEP 3 define reducers
const reducer = function(state = { books: [] }, action) {
  switch (action.type) {
    case "POST_BOOK":
      //   let books = state.books.concat(action.payload);
      //   return { books };
      return { books: [...state.books, ...action.payload] };
      break;
  }
  return state;
};
//STEP 1 create the store
const store = createStore(reducer);

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
