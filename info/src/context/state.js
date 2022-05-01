import React, { useReducer } from "react";
import ShopContext from "./context";
import {
  ADD_PRODUCT,
  EMPTY_CART,
  REMOVE_PRODUCT,
  shopReducer,
} from "./reducers";

const State = (props) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };
  const removeProductFromCart = (productID) => {
    dispatch({ type: REMOVE_PRODUCT, productID: productID });
  };
  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };
  return (
    <ShopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
export default State;
