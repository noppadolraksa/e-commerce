import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

import React, { useRef } from "react";
import axios from "axios";
const Container = styled.div`
  margin: 0px;
  height: 100vh;
  width: 100vw;
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
  ${mobile({ alignItems: "start", height: "110vh" })}
`;

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
  padding: 30px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  ${mobile({ width: "85%" })}
  ${tablet({ width: "55%" })}
  position:relative;
`;

const Logo = styled.h1`
  font-size: 0.95em;
  font-weight: 150;
  margin: 0px;
  ${mobile({ fontSize: "12px" })}

  a {
    color: teal;
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0.6em 0.6em 0.6em;
  ${mobile({ fontSize: "16px" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const AgreementContainer = styled.div`
  display: flex;
  margin: 0em 0em 0.5em 0.125em;
  align-items: center;
`;

const Agreement = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin: 0px 5px 5px 5px;
  min-width: 90%;
  ${tablet({ fontSize: "10px" })}
`;

const CheckAgreement = styled.input`
  margin-right: 0.3em;
`;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 0.2em;
  padding: 0.3em 1em;
  background-color: #318383;
  color: white;
  cursor: pointer;
  width: 100px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;

  padding: 10px 10px;
  ${mobile({ padding: "8px 10px" })}
`;

const LoginText = styled.p`
  font-size: 12px;
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 200;
  margin-right: 10px;
  ${mobile({ fontSize: "10px" })}
`;

const ErrorText = styled.p`
  color: red;
  font-size: 10px;
  margin: 0;
`;

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  //to dispatch confirm password
  const password = useRef({});
  const history = useHistory();
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://my-shop-ecommerces.herokuapp.com/auth/register",
        {
          username: data.username,
          password: data.password,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
        }
      );
      history.push("/registersuccess");
    } catch (err) {
      if (err.response.status === 400) {
        alert(err.response.data);
      } else {
        console.error(err);
        alert("something went wrong..");
      }
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">My-Shop </Link>
        </Logo>

        <Title>Create an Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("username", {
              required: "you must specify a username",
              minLength: {
                value: 8,
                message: "username must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "username has 20 characters limit",
              },
              pattern: {
                value: /^[A-Za-z0-9_]+$/,
                message: "username only contain letters numbers and underscore",
              },
            })}
            placeholder="username"
          />
          {errors.username && <ErrorText>{errors.username.message}</ErrorText>}

          <Input
            {...register("password", {
              required: "you must specify a password",
              minLength: {
                value: 10,
                message: "password must be more than 10 characters",
              },
              maxLength: {
                value: 24,
                message: "password has 24 characters limit",
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]/i,
                message:
                  "password should be included at least 1 uppercase and 1 number ",
              },
            })}
            type="password"
            placeholder="password"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          <Input
            {...register("confirmPassword", {
              required: "you must specify a confirm password",
              validate: {
                validate: (value) =>
                  value === password.current || "the passwords do not match",
              },
            })}
            placeholder="confirm password"
            type="password"
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword.message}</ErrorText>
          )}
          <Input {...register("email")} type="email" placeholder="your-email" />
          <Input
            {...register("firstname", {
              required: "you must specify a firstname",
              minLength: {
                value: 3,
                message: "firstname is too short",
              },
              maxLength: {
                value: 20,
                message: "firstname has 20 characters limit",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "firstname only contain english letters",
              },
            })}
            placeholder="firstname"
          />
          {errors.firstname && (
            <ErrorText>{errors.firstname.message}</ErrorText>
          )}
          <Input
            {...register("lastname", {
              required: "you must specify a lastname",
              minLength: {
                value: 5,
                message: "lastname is too short",
              },
              maxLength: {
                value: 24,
                message: "lastname has 24 characters limit",
              },
              pattern: {
                value: /[A-Za-z]+/i,
                message: "lastname only contain english letters",
              },
            })}
            placeholder="lastname"
          />
          {errors.lastname && <ErrorText>{errors.lastname.message}</ErrorText>}

          <AgreementContainer>
            <Controller
              name="agreement"
              control={control}
              rules={{ required: "please accept the agreement and policy" }}
              render={({ field }) => (
                <CheckAgreement type="checkbox" {...field} />
              )}
            />
            <Agreement>
              I agree with the Terms and Conditions of{" "}
              <Link to="/agreement" target="_blank">
                Terms Of Services{" "}
              </Link>
              Agreement.
              {errors.agreement && (
                <ErrorText>{errors.agreement.message}</ErrorText>
              )}
            </Agreement>
          </AgreementContainer>
          <Button type="submit">SUBMIT</Button>
        </Form>
        <LoginText>
          already have an account?{`  `}
          <Link to="/login">Login..</Link>
        </LoginText>
      </Wrapper>
    </Container>
  );
};

export default Register;
