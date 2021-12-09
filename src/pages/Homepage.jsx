import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styled from "styled-components";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";

const FixNavBar = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 70px;
  ${mobile({ marginTop: "120px" })}
`;

const Homepage = (cat, filters, sort) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const user = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Container>
      <FixNavBar>
        <Announcement />
        <Navbar />
      </FixNavBar>
      <Slider />
      <Categories />
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Homepage;
