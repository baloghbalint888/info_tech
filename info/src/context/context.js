import React from "react";

export default React.createContext({
  cart: [],
  addProductToCart: (product) => {},
  removeProductFromCart: (productID) => {},
  emptyCart: () => {},
});
