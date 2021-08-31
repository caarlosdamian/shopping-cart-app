import React, {  useRef } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Wrapper, Icon, CartCount, CartSideBar, EmptyCart,SideBarHeader } from "./Styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
const Cart = ({ setIsToggle, isToggle }) => {

  const $sidebarRef = useRef();

  useOnClickOutside($sidebarRef,()=>setIsToggle(false))
  return (
    <>
      <Wrapper onClick={() => setIsToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount>2</CartCount>
      </Wrapper>
      <CartSideBar ref={$sidebarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>Shopping cart</SideBarHeader>
        <EmptyCart>Empty card</EmptyCart>
      </CartSideBar>
    </>
  );
};

export default Cart;
