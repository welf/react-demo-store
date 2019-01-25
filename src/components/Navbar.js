import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import { DataConsumer } from "../context";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      {/* https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons
      (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk */}
      <Link to="/">
        <img src={logo} alt="Store Logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <DataConsumer>
        {({ cart }) => {
          const itemsInCart = cart.reduce(
            (acc, product) => acc + product.count,
            0
          );
          return (
            <Link to="/cart" className="ml-auto">
              <ButtonContainer itemsInCart={cart.length === 0 ? false : true}>
                <span className="mr-2">
                  <i className="fas fa-cart-plus" />
                </span>
                my cart
                {cart.length === 0 ? null : ` (${itemsInCart})`}
              </ButtonContainer>
            </Link>
          );
        }}
      </DataConsumer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
