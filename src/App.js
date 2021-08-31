import React, { useState, useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { Navbar, Overlay, MainContainer, ProductList } from "./AppStyles";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Context from "./store/Context";
export default function App() {
  const [isToggle, setIsToggle] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Cart
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          carts={context.carts}
          removerProductfromCart={context.removeProductToCart}
          clearCart={context.clearProductToCart}
        />
      </Navbar>
      <MainContainer>
        {isToggle && <Overlay />}
        {context.products.map((p) => (
          <Product
            key={p.id}
            id={p.id}
            imageURL={p.imageURL}
            title={p.title}
            price={p.price}
            addProductToCart={context.addProductToCart}
          />
        ))}
      </MainContainer>
    </>
  );
}
