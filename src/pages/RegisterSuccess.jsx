import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100wh;
  background: rgb(242, 255, 216);
  background: linear-gradient(
    60deg,
    rgba(242, 255, 216, 1) 0%,
    rgba(220, 251, 211, 1) 50%,
    rgba(160, 233, 247, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ alignItems: "start" })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 40%;
  height: 300px;
  padding: 30px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  ${mobile({ width: "75%", marginTop: "3em" })}
  ${tablet({ width: "55%" })}
  position: relative;
`;

const Title = styled.h2``;

const Text = styled.p`
  margin: auto;
`;

const SubText = styled.p`
  position: absolute;
  right: 50px;
  bottom: 20px;
`;

const RegisterSuccess = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register Successfully!</Title>
        <Text>
          please login{" "}
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/login"
          >
            here
          </Link>{" "}
        </Text>
        <SubText>
          <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
            go back
          </Link>
        </SubText>
      </Wrapper>
    </Container>
  );
};

export default RegisterSuccess;
