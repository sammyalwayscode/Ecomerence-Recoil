import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { cart } from "./Global";
import { iDATA } from "./InterFace";

const Cart = () => {
  const [myCart, setMyCart] = useRecoilState(cart);
  const viewCart = useRecoilValue(cart);

  const removeCart = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, QTY: item.QTY! - 1 } : item
        );
      } else {
        return [...el, { ...product, QTY: 1 }];
      }
    });
  };

  const addCart = (product: iDATA) => {
    setMyCart((el) => {
      const check = el.find((props) => props.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...product, QTY: item.QTY! + 1 } : item
        );
      } else {
        return [...el, { ...product, QTY: 1 }];
      }
    });
  };

  const remove = (product: iDATA) => {
    setMyCart((el) => {
      return el.filter((props) => props.id !== product.id);
    });
  };

  const getTotal = (product: iDATA[]) =>
    product.reduce((a: number, b) => a + b.QTY! * b.price, 0);

  const totalQty = (product: iDATA[]) =>
    product.reduce((a: number, b) => a + b.QTY!, 0);

  return (
    <Container>
      <Wrapper>
        {viewCart?.map((props) => (
          <Card key={props.id}>
            <ImageDiv>
              <img src={props.image} alt="" />
            </ImageDiv>
            <Title>Product: {props.title} </Title>
            <Price>Price: {props.price} </Price>
            <Description>Qty: {props.QTY} </Description>
            <AddRem>
              <button
                onClick={() => {
                  addCart(props);
                }}
              >
                Add
              </button>
              <button
                onClick={() => {
                  removeCart(props);
                }}
              >
                Remove
              </button>
            </AddRem>
            <button
              onClick={() => {
                remove(props);
              }}
            >
              Remove From cart
            </button>
          </Card>
        ))}
      </Wrapper>
      <TotalBox>
        <strong>Total Price: {Math.ceil(getTotal(viewCart))} </strong>
        <br />
        <strong>Total QTY: {totalQty(viewCart)} </strong>
        <br />
        <button>Pay With Paystark</button>
      </TotalBox>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  font-family: montserrat;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  height: 300px;
  width: 250px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 12px;
`;
const ImageDiv = styled.div`
  height: 150px;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const Title = styled.div``;
const Price = styled.div``;
const Description = styled.div``;
const AddRem = styled.div``;

const TotalBox = styled.div`
  padding: 50px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border: 1px solid gray;
`;
