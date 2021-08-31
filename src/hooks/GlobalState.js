import { useReducer } from "react";
import { ADD_TO_CART, CLEART_ALL_FROM_CART, REMOVE_FROM_CART } from "./typs";
import Reducer from "./Reducer";
import Context from "../store/Context";
export default function GlobalState(props) {
  const products = [
    {
      id: 0,
      title: "Gaming Mouse",
      imageURL:
        "https://m.media-amazon.com/images/I/51S6IQ2lGwL._AC_UY327_FMwebp_QL65_.jpg",
      price: 49.5,
    },
    {
      id: 1,
      title: "Gaming Chair",
      imageURL:
        "https://m.media-amazon.com/images/I/61HEqHMkRhL._AC_UL480_FMwebp_QL65_.jpg",
      price: 149.0,
    },
    {
      id: 2,
      title: "Gaming Pad",
      imageURL:
        "https://m.media-amazon.com/images/I/71k--F6wVGL._AC_UL480_FMwebp_QL65_.jpg",
      price: 34.5,
    },
  ];
  const [state, dispatch] = useReducer(Reducer, { carts: [] });
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  const removeProductToCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };
  const clearProductToCart = () => {
    dispatch({
      type: CLEART_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductToCart: removeProductToCart,
        clearProductToCart: clearProductToCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
