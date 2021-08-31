import React, { useRef } from "react";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  Icon,
  CartCount,
  CartSideBar,
  EmptyCart,
  SideBarHeader,
  CardRow,
  CardTitle,
  Card,
  CardImage,
  CardRemove,
  ClearButton,
} from "./Styles";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { CardBody } from "../Product/Styles";
const Cart = ({
  setIsToggle,
  isToggle,
  carts,
  clearCart,
  removerProductfromCart,
}) => {
  console.log(carts);
  let totalItems = carts.reduce((sum, value) => sum + value.quantity, 0);

  const $sidebarRef = useRef();

  useOnClickOutside($sidebarRef, () => setIsToggle(false));
  return (
    <>
      <Wrapper onClick={() => setIsToggle(true)}>
        <Icon icon={faShoppingCart} />
        <CartCount>{totalItems}</CartCount>
      </Wrapper>
      <CartSideBar ref={$sidebarRef} className={isToggle ? "expand" : "shrink"}>
        <SideBarHeader>Shopping cart</SideBarHeader>

        {carts.length === 0 ? (
          <EmptyCart>Empty card</EmptyCart>
        ) : (
          carts.map(({ product, quantity }) => (
            <Card key={product.id}>
              <CardImage src={product.imageURL} />
              <CardBody>
                <CardRow>
                  <CardTitle>{product.title}</CardTitle>
                  <CardRemove
                    icon={faTimes}
                    onClick={() => removerProductfromCart(product.id)}
                  />
                </CardRow>
                <CardRow>
                  <CardTitle>
                    Total Quantity: ({quantity}) - ${product.price*quantity}
                  </CardTitle>
                </CardRow>
              </CardBody>
            </Card>
          ))
        )}
        {carts.length !== 0 && <ClearButton onClick={() => clearCart()}>Clear car</ClearButton>}
      </CartSideBar>
    </>
  );
};

export default Cart;
