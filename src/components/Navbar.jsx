import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile, notebook, tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 70px;
  background-color: white;
  ${mobile({ height: "90px", maxWidth: "100vw" })}
  ${tablet({ maxWidth: "780px" })}
  ${notebook({ maxWidth: "960px" })}
 


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
  ${mobile({ minWidth: "50vw" })}
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ margin: "0px 20px 10px 0px" })}
  flex:1;
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  width: 100%;
  ${mobile({ margin: "0px", padding: "0px 10px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #005555;
  margin: 0px 10px;
  font-size: 25px;
  cursor: pointer;
  border-bottom-style: none;
  ${mobile({ fontSize: "1.0em" })}
  ${tablet({ fontSize: "1.2em" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  ${tablet({ width: "100%" })}
  ${mobile({ width: "92%" })}
`;

const SearchBackground = styled.div`
  padding: 10px;
  background-color: #008080c7;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${tablet({ padding: "5px" })}
`;

const MenuItems = styled.div`
  font-size: 0.85em;
  cursor: pointer;
  margin-left: 25px;
`;
const MenuLogout = styled.div`
  font-size: 0.85em;
  cursor: pointer;
  margin-left: 25px;
  color: #ba0000;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
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
          {currentUser ? (
            <MenuLogout onClick={dispatch(logout)}>
              <a href="/">Log out</a>
            </MenuLogout>
          ) : (
            <>
              <MenuItems>
                <a href="/login">Login</a>
              </MenuItems>
              <MenuItems>
                <a href="/register">Register</a>
              </MenuItems>
            </>
          )}
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
