import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

export const MyNavLink = styled(NavLink)`
  &.${(props) => props.activeClassName} {
    color: #ff5a5a;
    background-color: #e8e8e8;
  }
`;

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(235, 250, 244);
  position: sticky;
  top: 50px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.p`
  font-size: 13px;
  color: rgb(172, 172, 172);
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
`;

const Sidebar = (props) => {
  const location = useLocation();
  const list = location.pathname.split("/")[3];

  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
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
        <SidebarMenu>
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
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
