import React, { useState, useContext, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { Navbar, Overlay, MainContainer } from "./AppStyles";
import Cart from "./components/Cart/Cart";
import Context from "./store/Context";
export default function App() {
  const [isToggle, setIsToggle] = useState(false);
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Cart isToggle={isToggle} setIsToggle={setIsToggle} />
      </Navbar>
      <MainContainer>{isToggle && <Overlay />}</MainContainer>
    </>
  );
}
