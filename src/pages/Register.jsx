import styled from "styled-components";

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
`;

const Wrapper = styled.div`
  width: 40%;
  height: 60%;
  padding: 20px;
  background-color: white;
  background: #fdfdfd;
  box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -webkit-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
  -moz-box-shadow: 0px 0px 7px 1px rgba(54, 54, 54, 0.31);
`;

const Logo = styled.h1`
  font-size: 15px;
  font-weight: 150;
  margin: 0px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin: 10px 10px 10px;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AgreementContainer = styled.div`
  display: flex;
  margin: 20px 0px 20px 2px;
`;

const Agreement = styled.div`
  font-size: 14px;
  font-weight: 200;
`;

const CheckAgreement = styled.input`
  margin-right: 5px;
`;

const TermsOfService = styled.a``;

const Button = styled.button`
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px 15px;
  background-color: #318383;
  color: white;
  cursor: pointer;
  margin-left: 400px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 7px 10px 0px 0px;
  padding: 7px 5px;
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
          <Input placeholder="first name" />
          <Input placeholder="last name" />

          <AgreementContainer>
            <CheckAgreement type="checkbox" />
            <Agreement>
              I agree with the Terms and Conditions of{" "}
              <TermsOfService href="./Agreement">
                Terms Of Services
              </TermsOfService>{" "}
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
