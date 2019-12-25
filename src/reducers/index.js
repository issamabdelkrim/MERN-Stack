"use strict";

import { combineReducers } from "redux";

//HERE IMPORT REDUCERS TO BE COMBINED
import { booksReducers } from "./BooksReducers";
import { cartReducers } from "./cartReducers";
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
});
