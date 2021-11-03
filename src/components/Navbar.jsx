import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile, notebook, tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 100px;
  background-color: white;
  ${mobile({ height: "90px", maxWidth: "100vw" })}
  ${tablet({ maxWidth: "780px" })}
  ${notebook({ maxWidth: "960px" })}
  flex-wrap:wrap;
  -webkit-box-shadow: 0 2px 2px -2px #000000;
  -moz-box-shadow: 0 2px 2px -2px #000000;
  box-shadow: 0 2px 2px -2px #000000;
`;

const Wrapper = styled.div`
  padding: 12px 40px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "10px 0px", width: "100vw" })}
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 3;
  ${mobile({ width: "60vw", flex: "none", marginRight: "5px" })}
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  ${mobile({ margin: "10px 20px 10px 0px" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  width: 100%;
  ${mobile({ margin: "0px", padding: "0px 10px" })}
`;

const Logo = styled.p`
  font-weight: bold;
  color: #005555;
  margin: 0px 20px;
  font-size: 2em;
  cursor: pointer;
  border-bottom-style: none;
  ${mobile({ fontSize: "1.2em" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: space-between;
`;

const SearchBackground = styled.div`
  height: 40px;
  width: 40px;
  background-color: #008080c7;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({ padding: "0px 10px", margin: "0px" })}
`;

const MenuItems = styled.div`
  font-size: 0.85em;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={`/`}>
            <Logo>My-Shop</Logo>
          </Link>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchBackground>
              <Search
                style={{
                  color: "white",
                  fontSize: "1.2em",
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
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
