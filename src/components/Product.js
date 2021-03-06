import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ product, addToCart, openModal }) => {
  const { id, title, img, price, inCart } = product;

  return (
    <ProductCard className="mx-auto col-9 col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-and-button-container">
          <Link to={'/details/' + id}>
            <div className="img-container p-5">
              <img src={img} alt={title} className="card-img-top" />
            </div>
          </Link>
          <button
            className="cart-btn"
            onClick={async () => {
              await addToCart(id);
              openModal(id);
            }}
            disabled={inCart ? true : false}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0 mr-2">{title}</p>
          <h6 className="text-blue font-italic mb-0">
            <span className="mr-2">$</span>
            {price}
          </h6>
        </div>
      </div>
    </ProductCard>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

const ProductCard = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-and-button-container {
    position: relative;
    overflow: hidden;
  }

  .img-and-button-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
    z-index: 50;
  }

  .img-container:hover {
    cursor: pointer;
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .cart-btn:focus {
    outline: none;
  }
`;

export default Product;
