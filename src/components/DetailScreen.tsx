import React from "react";
import styled from "styled-components";

const DetailScreen = () => {
  return (
    <Container>
      <Wrapper>
        <h3>Title:</h3>
        <p>Description:</p>
      </Wrapper>
    </Container>
  );
};

export default DetailScreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: montserrat;
`;
const Wrapper = styled.div`
  padding: 50px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  font-family: poppins;
`;
