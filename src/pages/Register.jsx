import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0px;
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
  width: 40%;
  height: 500px;
  padding: 30px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  ${mobile({ width: "75%", marginTop: "3em" })}
  ${tablet({ width: "55%" })}
`;

const Logo = styled.h1`
  font-size: 0.95em;
  font-weight: 150;
  margin: 0px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0.6em 0.6em 0.6em;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 5px;
  padding: 10px 10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>My-Shop</Logo>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Input placeholder="your-email" />
          <Input placeholder="firstname" />
          <Input placeholder="lastname" />

          <AgreementContainer>
            <CheckAgreement type="checkbox" />
            <Agreement>
              I agree with the Terms and Conditions of{" "}
              <Link to="/agreement">Terms Of Services </Link>
              Agreement.
            </Agreement>
          </AgreementContainer>
          <Button>SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
