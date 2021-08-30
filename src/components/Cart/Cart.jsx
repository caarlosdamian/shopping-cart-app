import React, { useState, useRef } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart } from "./Styles";
const Cart = ({ setIsToggle, isToggle }) => {
  const [count, setcount] = useState(0);
  const $sidebarRef = useRef();
  return (
    <>
      <Wrapper onClick={() => setIsToggle(!isToggle)}>
        <Icon icon={faShoppingCart} />
        <CartCount>{count}</CartCount>
      </Wrapper>
      <CartSideBar ref={$sidebarRef} className={isToggle ? "expand" : "shrink"}>
        <EmptyCart>Empty card</EmptyCart>
      </CartSideBar>
    </>
  );
};

export default Cart;
