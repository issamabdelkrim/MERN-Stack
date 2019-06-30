"use strict";

//Books Reducers
export function booksReducers(state = { books: [] }, action) {
  switch (action.type) {
    case "POST_BOOK":
      //   let books = state.books.concat(action.payload);
      //   return { books };
      return { books: [...state.books, ...action.payload] };
      break;
    case "DELETE_BOOK":
      //Create a copy of the current array of books
      const currentBookToDelete = [...state.books];
      //Determine at which index in books array is the book to be deleted
      const indexToDelete = currentBookToDelete.findIndex(function(book) {
        return book.id === action.payload.id;
      });
      //Use slice to remove the  book at specified index
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      };
      break;
    case "UPDATE_BOOK":
      //Create a copy of the current array of books
      const currentBookToUpdate = [...state.books];
      //Determinate at which index in books array is the book to be updated
      const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
        return book.id === action.payload.id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      };
      console.log("what is the new book", newBookToUpdate);
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;
  }

  return state;
}
