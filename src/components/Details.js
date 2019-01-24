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
          <section className="container py-3">
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
              <div className="col-10 col-md-6 mx-auto my-2">
                <img src={`/${img}`} alt={title} className="img-fluid" />
              </div>
              {/* end of left column */}

              {/* right column */}
              <div className="col-10 col-md-6 mx-auto my-2">
                <h2 className="text-capitalize">Model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
                  made by: <span>{company}</span>
                </h4>
                <h3 className="text-blue text-capitalize">
                  <strong>
                    price: <span>$</span>
                    {price}
                  </strong>
                </h3>
                <p className="lead text-capitalize font-weight-bold mt-3 mb-0">
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
