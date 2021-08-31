import React, { useState } from "react";
import {
  Wrapper,
  Overlaywrapper,
  Card,
  CardBody,
  CardPrice,
  CardTitle,
  Icon,
  CartImage,
} from "./Styles";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = ({ addProductToCart,...props }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHover&&(
            <Overlaywrapper onClick={()=>addProductToCart({...props})}>
                <Icon icon={faShoppingCart}/>
            </Overlaywrapper>
        )}
      <Card>
        <CartImage src={props.imageURL} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardPrice>{props.price}</CardPrice>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default Product;
