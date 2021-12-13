import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import {
  mobile,
  mobileMini,
  navbarFixed,
  notebook,
  tablet,
} from "../responsive";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/userRedux";
import { deleteAllProduct } from "../redux/cartRedux";

const Container = styled.div`
  background-color: white;

  ${tablet({ maxWidth: "100vw" })}
  ${notebook({ maxWidth: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 5px 40px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "3px 0px 0px 0px" })}
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
  ${mobileMini({ margin: "0px 20px 10px 0px" })}
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

const MenuItems = styled.p`
  font-size: 0.85em;
  cursor: pointer;
  margin-left: 25px;
  a {
    color: #005555;
    text-decoration: none;
  }
`;

const MenuLogout = styled.p`
  font-size: 10px;
  cursor: pointer;
  margin-left: 25px;
  color: #ba0000;
`;

const TextHello = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  a {
    color: teal;
    text-decoration: none;
  }
`;

const TextFirstname = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: teal;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 5px;
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
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to={`/`}
            >
              My-Shop
            </Link>
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
              <Link
                style={{ textDecoration: "none" }}
                to="/profile/user/profile"
              >
                <TextHello>
                  <ProfileImg
                    alt="profile img"
                    src={currentUser.img || ""}
                  ></ProfileImg>
                  <TextFirstname>{currentUser.firstname}</TextFirstname>
                </TextHello>
              </Link>

              <MenuLogout onClick={handleLogout}>Log out</MenuLogout>
            </>
          ) : (
            <>
              <MenuItems>
                <Link
                  style={{ textDecoration: "inherit", color: "inherit" }}
                  to="/login"
                >
                  Login
                </Link>
              </MenuItems>
              <MenuItems>
                <Link
                  style={{ textDecoration: "inherit", color: "inherit" }}
                  to="/register"
                >
                  Register
                </Link>
              </MenuItems>
            </>
          )}
          <MenuItems>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/cart"
            >
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
