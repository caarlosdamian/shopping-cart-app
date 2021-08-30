import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { Navbar } from "./AppStyles";
import Cart from "./components/Cart/Cart";
export default function App() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <Cart isToggle={isToggle} setIsToggle={setIsToggle} />
      </Navbar>
    </>
  );
}
