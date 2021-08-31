import { ADD_TO_CART, CLEART_ALL_FROM_CART, REMOVE_FROM_CART } from "./typs";

const addProductToCart = (state, product) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === product.id);

  if (curItemIndex < 0) {
    copy.push({ product, quantity: 1 });
  } else {
    const copyItem = { ...copy[curItemIndex] };
    copyItem.quantity++;
    copy[curItemIndex] = copyItem;
  }

  return { ...state, carts: copy };
};
const removeProductToCart = (state, productID) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.product.id === productID);

  if (curItemIndex > 0) {
    const curItem = { ...copy[curItemIndex] };
    curItem.quantity--;
    if (curItem.quantity <= 0) {
      copy.splice(curItemIndex, 1);
    } else {
      copy[curItemIndex] = curItem;
    }
  }
  return { ...state, carts: copy };
};
const clearProductToCart = (state) => {
  return { ...state, carts: [] };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addProductToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeProductToCart(state, action.payload);
    case CLEART_ALL_FROM_CART:
      return clearProductToCart(state);
    default:
      return state;
  }
};
