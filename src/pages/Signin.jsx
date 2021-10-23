import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(242, 255, 216);
  background: linear-gradient(
    60deg,
    rgba(242, 205, 216, 1) 0%,
    rgba(220, 221, 211, 1) 50%,
    rgba(160, 203, 247, 1) 100%
  );
`;

const Wrapper = styled.div`
  width: 30%;
  height: 50%;
  padding: 20px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  position: retative;
`;

const Logo = styled.h1`
  font-size: 15px;
  font-weight: 150;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  margin: 30px 10px 10px 10px;
`;

const Form = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  margin: 10px 0px;
  padding: 10px 10px;
`;

const SubText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0px;
`;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px 15px;
  background-color: #318383;
  color: white;
  cursor: pointer;
  width: 20%;
  margin-top: 0px;
  margin-left: 290px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>My-Shop</Logo>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <SubText>
            No account? <a href="./Register">Create one!</a>
          </SubText>
          <SubText>
            Forgot password? <a href="./Register">Click here!</a>
          </SubText>
          <Button>Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;