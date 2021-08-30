import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: block;
  margin: 0 5px;
  cursor: pointer;
  position: relative;
`;
export const Icon = styled(FontAwesomeIcon)`
  padding: 5px;
  font-size: 24px;
  color: #ffffff;
`;
export const CartCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -5px;
  padding: 3px 7px;
  border-radius: 50px;
  background: #f05454;
  color: white;
  font-size: 12px;
  font-weight: 600;
`;

export const CartSideBar = styled.div`
  z-index: 1000;
  width: 350px;
  background: white;
  top: 0;
  right: 0;
  padding: 25px;
  position: fixed;
  overflow: auto;
  height: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all ease-in 0.3s;

  &.expand {
    transition: all ease-in 0.3s;
    right: 0;
  }
  &.shrink {
    transition: all ease-in 0.3s;
    right: -400px;
  }
`;
export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50, -50%);
  font-size: 24px;
`;
