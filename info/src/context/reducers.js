export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EMPTY_CART = "EMPTY_CART";
const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.productID === product.productID
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productID, state) => {
  const updatedCart = [...state.cart];

  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.productID === productID
  );

  const updatedItem = { ...updatedCart[updatedItemIndex] };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const emptyCart = (state) => {
  return { ...state, cart: [] };
};

export const shopReducer = (state, action) => {
  if (action.type === ADD_PRODUCT) {
    return addProductToCart(action.product, state);
  }
  if (action.type === REMOVE_PRODUCT) {
    return removeProductFromCart(action.productID, state);
  }
  if (action.type === EMPTY_CART) {
    return emptyCart(state);
  }
  return state;
};
