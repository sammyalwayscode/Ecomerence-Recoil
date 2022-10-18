import React from "react";
import styled from "styled-components";

const Admin = () => {
  return (
    <Container>
      <h3>Admin</h3>
      <Wrapper>
        <Card>
          <ImageDiv>
            <img src="" alt="" />
          </ImageDiv>
          <Title>Product: </Title>
          <Price>Price: </Price>
          <Description>Qty: </Description>
          <AddRem></AddRem>
          <button>Not Dilivered...</button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Admin;

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
