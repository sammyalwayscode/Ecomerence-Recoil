import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { cart } from "./Global";
import { iDATA } from "./InterFace";

const Header = () => {
  const totalQty = (product: iDATA[]) =>
    product.reduce((a: number, b) => a + b.QTY!, 0);

  const viewCart = useRecoilValue(cart);
  return (
    <Container>
      <Wrapper>
        <Logo>Comert.</Logo>
        <Navs>
          <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/">
            <span>Product</span>
          </NavLink>
          <NavLink style={{ color: "#fff", textDecoration: "none" }} to="/cart">
            <span>Cart: {totalQty(viewCart)}</span>
          </NavLink>
          <NavLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="/dispatch"
          >
            <span>Dispatch</span>
          </NavLink>

          <NavLink
            style={{ color: "#fff", textDecoration: "none" }}
            to="/admin"
          >
            <span>Admin</span>
          </NavLink>
        </Navs>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
  font-family: montserrat;
  color: #fff;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
`;
const Navs = styled.div`
  span {
    margin: 0 10px;
    font-size: 15px;
    font-weight: 700;
  }
`;
