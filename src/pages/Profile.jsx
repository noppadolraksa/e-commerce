import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styled from "styled-components";
import UserProfile from "./profile/UserProfile";
import UserAddress from "./profile/UserAddress";
import UserChangePassword from "./profile/UserChangePassword";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import UserSuccessOrder from "./profile/UserSuccessOrder";
import UserPendingOrder from "./profile/UserPendingOrder";
import UserAllOrder from "./profile/UserAllOrder";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
`;

const Profile = () => {
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <Container>
      <Navbar />
      <Section>
        <Sidebar />
        {user ? (
          <>
            <Route path="/profile/user/profile">
              <UserProfile />
            </Route>
            <Route path="/profile/user/address">
              <UserAddress />
            </Route>
            <Route path="/profile/user/changepassword">
              <UserChangePassword />
            </Route>
            <Route path="/profile/order/all">
              <UserAllOrder />
            </Route>
            <Route path="/profile/order/pending">
              <UserPendingOrder />
            </Route>
            <Route path="/profile/order/success">
              <UserSuccessOrder />
            </Route>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Section>
    </Container>
  );
};

export default Profile;
