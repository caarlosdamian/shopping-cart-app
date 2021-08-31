import { createContext } from "react";

export default createContext({
  products: [],
  carts: [],
  addProductToCart: (product) => {},
  removeProductToCart: (product) => {},
  clearProductToCart: (product) => {},
});
