"use strict";

export function addToCart(books) {
  return {
    type: "ADD_TO_CART",
    payload: books
  };
}
