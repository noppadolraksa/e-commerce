import React from "react";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Agreement from "./pages/Agreement";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RegisterSuccess from "./pages/RegisterSuccess";
import Maintenance from "./pages/Maintenance";
import ToTop from "./components/ToTop";

const App = () => {
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ToTop />
          <Homepage />
        </Route>

        <Route path="/products/:category">
          <ToTop />
          <ProductList />
        </Route>

        <Route path="/product/:id">
          <ToTop />
          <Product />
        </Route>

        <Route path="/products">
          <ToTop />
          <ProductList />
        </Route>

        <Route path="/cart">
          <ToTop />
          <Cart />
        </Route>

        <Route path="/wishlist">
          <ToTop />
          <Wishlist />
        </Route>

        <Route path="/agreement">
          <ToTop />
          <Agreement />
        </Route>

        <Route path="/registersuccess">
          <RegisterSuccess />
        </Route>

        <Route path="/success">
          <Success />
        </Route>

        <Route path="/maintenance">
          <Maintenance />
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
