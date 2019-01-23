import React from "react";
import { Link } from "react-router-dom";
import { DataConsumer } from "../context";
import { ButtonContainer } from "./Button";

const Details = props => {
  const id = parseInt(props.id, 10);
  return (
    <DataConsumer>
      {({ products, addToCart }) => {
        const product = products.find(item => item.id === id);
        const { title, img, company, info, price, inCart } = product;

        return (
          <section className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end of title */}

            {/* product info */}
            <div className="row">
              {/* left column */}
              <div className="col-10 col-md-6 mx-auto my-3">
                <img src={`/${img}`} alt={title} className="img-fluid" />
              </div>
              {/* end of left column */}

              {/* right column */}
              <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                <h2>Model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span>{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="lead text-muted">{info}</p>
                <Link to="/">
                  <ButtonContainer>Continue Shopping</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  onClick={() => addToCart(id)}
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    <span>
                      <i className="fas fa-credit-card mr-2" />
                      go to checkout
                    </span>
                  ) : (
                    <span>
                      <i className="fas fa-cart-plus mr-2" />
                      add to cart
                    </span>
                  )}
                </ButtonContainer>
              </div>
              {/* end of right column */}
            </div>
            {/* end of product info */}
          </section>
        );
      }}
    </DataConsumer>
  );
};

export default Details;
