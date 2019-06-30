"use strict";

import { combineReducers } from "redux";

//HERE IMPORT REDUCERS TO BE COMBINED
import { booksReducers } from "./BooksReducers";

export default combineReducers({
  books: booksReducers
});
