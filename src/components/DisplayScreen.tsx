import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { product } from "./Global";
import { cart } from "./Global";
import { iDATA } from "./InterFace";

const DisplayScreen: React.FC = () => {
  const data = useRecoilValue(product);

  const [myCart, setMyCart] = useRecoilState(cart);

  const addToCart = (product: iDATA) => {
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

  console.log(myCart);
  return (
    <Container>
      <Wrapper>
        {data?.map((props) => (
          <Card key={props.id}>
            <ImageDiv>
              <img src={props.image} alt="" />
            </ImageDiv>
            <Title>Product: </Title>
            <Price>Price:</Price>
            <Description>Qty:</Description>
            <button
              onClick={() => {
                addToCart(props);
              }}
            >
              Add To Cart
            </button>
            <button>See More</button>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default DisplayScreen;

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

  /* button{
    
  } */
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
