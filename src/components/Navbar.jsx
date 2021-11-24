import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile, mobileMini, notebook, tablet } from "../responsive";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userRedux";
import { deleteAllProduct } from "../redux/cartRedux";

const Container = styled.div`
  height: 70px;
  background-color: white;
  ${mobile({ height: "90px", maxWidth: "100vw" })}
  ${tablet({ maxWidth: "100vw" })}
  ${notebook({ maxWidth: "100vw" })}
 


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

  ${mobile({ margin: "10px 20px 10px 0px" })}
  ${mobileMini({ margin: "5px 20px 10px 0px" })}
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
  a {
    color: #005555;
    text-decoration: none;
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  ${tablet({ width: "85%" })}
  ${mobile({ width: "92%" })}
`;

const SearchBackground = styled.div`
  padding: 10px;
  background-color: teal;
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
  a {
    color: #005555;
    text-decoration: none;
  }
`;
const MenuLogout = styled.div`
  font-size: 10px;
  cursor: pointer;
  margin-left: 25px;
  color: #ba0000;
`;
const TextHello = styled.p`
  font-size: 12px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async (e) => {
    try {
      e.preventDefault();
      await dispatch(logoutUser());
      await dispatch(deleteAllProduct());
      history.go(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link to={`/`}>My-Shop</Link>
          </Logo>
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
            <>
              <TextHello>{`hello ${currentUser.firstname}`}</TextHello>
              <MenuLogout onClick={handleLogout}>Log out</MenuLogout>
            </>
          ) : (
            <>
              <MenuItems>
                <Link to="/login">Login</Link>
              </MenuItems>
              <MenuItems>
                <Link to="/register">Register</Link>
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
