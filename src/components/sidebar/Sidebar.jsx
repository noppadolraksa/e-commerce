import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import { mobile } from "../../responsive";
import { useState } from "react";

export const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #ff5a5a;
    background-color: #e8e8e8;
  }
`;

const Container = styled.div`
  height: calc(100vh - 50px);
  background-color: rgb(235, 250, 244);
  position: sticky;
  top: 50px;
  border-radius: 10px;
  transition: all 0.5s ease;
  width: ${(props) => props.open === false && "30px"};
  flex: ${(props) => (props.open === false ? "none" : 1)};
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
  position: relative;
`;
const BarSlide = styled.div`
  position: absolute;
  width: 10px;
  height: 100px;
  background-color: #55555575;
  top: 35vh;
  border-radius: 5px;
  right: 10px;
  /* transform: translate(-50%, -50%); */
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
  transition: all 0.5s ease;
  display: ${(props) => (props.open === false ? "none" : "in-line")};
`;

const SidebarTitle = styled.p`
  font-size: 13px;
  color: rgb(172, 172, 172);
  ${mobile({ fontSize: "10px", marginBottom: "5px" })}
`;

const SidebarList = styled.p`
  padding: 5px;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: ${(props) => props.select === true && "#ac1616"};
  background-color: ${(props) => props.select === true && "#e8e8e8;"};
  a {
    color: #555;
    text-decoration: none;
  }
  &:hover {
    color: #e12424 !important;
    background-color: #e8e8e8;
  }
  ${mobile({ fontSize: "10px", marginBottom: "5px" })}
`;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const list = location.pathname.split("/")[3];

  return (
    <Container
      onMouseEnter={() => setSidebar(true)}
      onMouseLeave={() => setSidebar(false)}
      open={sidebar}
    >
      <Wrapper>
        <BarSlide></BarSlide>
        <SidebarMenu open={sidebar}>
          <SidebarTitle>Edit Profile</SidebarTitle>
          <Link to="/profile/user/profile" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "profile" ? true : false}>
              Profile
            </SidebarList>
          </Link>
          <Link to="/profile/user/address" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "address" ? true : false}>
              Address
            </SidebarList>
          </Link>
          <Link
            to="/profile/user/changepassword"
            style={{ textDecoration: "none" }}
          >
            <SidebarList select={list === "changepassword" ? true : false}>
              Change Password
            </SidebarList>
          </Link>
        </SidebarMenu>
        <SidebarMenu open={sidebar}>
          <SidebarTitle>My Order</SidebarTitle>
          <Link to="/profile/order/all" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "all" ? true : false}>
              All Order
            </SidebarList>
          </Link>
          <Link to="/profile/order/pending" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "pending" ? true : false}>
              Pending Order
            </SidebarList>
          </Link>
          <Link to="/profile/order/success" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "success" ? true : false}>
              Success Order
            </SidebarList>
          </Link>
          <Link to="/profile/order/cancel" style={{ textDecoration: "none" }}>
            <SidebarList select={list === "cancel" ? true : false}>
              Cancel Order
            </SidebarList>
          </Link>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
