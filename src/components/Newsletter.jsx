import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  background-color: white;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;

  border: 0.5px solid lightgray;
`;

const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InfoContainer>
        <Input placeholder="E-mail here" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default Newsletter;
