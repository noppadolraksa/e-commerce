import React, { useState } from "react";
import styled from "styled-components";
import { tablet } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Link, useHistory } from "react-router-dom";

const Container = styled.div`
  margin: 0px;
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
  flex-wrap: wrap;
  padding: 20px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  position: retative;
  ${tablet({ width: "400px" })}
`;

const Logo = styled.h1`
  font-size: 1em;
  font-weight: 150;
  position: absolute;
  a {
    color: #005555;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 800;
  margin: 30px 10px 10px 10px;
`;

const Form = styled.form`
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
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0px;
  ${tablet({ fontSize: "14px" })}
`;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px 15px;
  background-color: #318383;
  color: white;
  cursor: pointer;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 10px;

  &::disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    try {
      login(dispatch, { username, password });
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link style={{ textDecoration: "inherit", color: "inherit" }} to="/">
            My-Shop
          </Link>
        </Logo>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <SubText>
            No account?{" "}
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="./Register"
            >
              Create one!
            </Link>
          </SubText>
          <SubText>
            Forgot password?{" "}
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="./Register"
            >
              Click here!
            </Link>
          </SubText>
          <Button onClick={handleClick} disabled={isFetching}>
            Submit
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
