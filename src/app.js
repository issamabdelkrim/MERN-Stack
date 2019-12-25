"use strict";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
//IMPORT COMBINE REDUCER
import reducers from "./reducers/index";

//import add to cart actions
import { addToCart } from "./actions/cartActions";

import { postBooks, updateBooks, deleteBooks } from "./actions/booksActions";
//STEP 1 create the store

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);
// store.subscribe(function() {
//   console.log("current state :", store.getState());
//   //console.log("second book price is:", store.getState()[1].price);
// });

//STEP 2 created and dispatch actions
store.dispatch(
  postBooks([
    {
      id: 1,
      title: "this is a first book",
      description: " React books",
      price: 33.333
    },
    {
      id: 2,
      title: "this is a second book",
      description: " React books",
      price: 44.333
    },
    {
      id: 3,
      title: "this is a third book",
      description: " React books",
      price: 55.333
    }
  ])
);

// Dispatch third books
store.dispatch(deleteBooks({ id: 1 }));
// -> CART ACTIONS <<--
// ADD to Cart

store.dispatch(addToCart([{ id: 1 }]));
