import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;
  background-color: white;
  ${mobile({ height: "80%" })}
`;

const Wrapper = styled.div`
  padding: 12px 40px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 3;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Input = styled.input`
  flex: 7;
  height: 30px;
  border: none;
  margin-right: 10px;
  padding-left: 20px;
`;

const Logo = styled.p`
  font-weight: bold;
  margin: 0px 20px;
  font-size: 30px;
  ${mobile({ vh: "80vh" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;

  justify-content: flex-end;
`;
const SearchBackground = styled.div`
  height: 40px;
  width: 100%;
  background-color: #008080c7;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({ flex: "3" })}
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>My-Shop</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchBackground>
              <Search
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
            </SearchBackground>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItems>Signin</MenuItems>
          <MenuItems>Register</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
