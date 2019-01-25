import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { DataConsumer } from "../context";
import { ModalContainer, closeIfClickIsOutOfElement } from "./ModalContainer";

const Modal = () => {
  return (
    <DataConsumer>
      {({ productInModal, closeModal, history }) => {
        const { title, img, price } = productInModal;
        return (
          <ModalContainer
            onClick={event =>
              closeIfClickIsOutOfElement(event, "modal", closeModal)
            }
          >
            <div className="container">
              <div className="row">
                <div
                  id="modal"
                  className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-4"
                >
                  <h5>item added to the cart</h5>
                  <img src={img} alt={title} className="img-fluid" />
                  <h5>{title}</h5>
                  <h5 className="text-muted">price: ${price}</h5>
                  {/* main buttons */}
                  <Link to="/">
                    <ButtonContainer onClick={closeModal}>
                      to shopping
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    onClick={() => {
                      closeModal();
                      history.push("/cart");
                    }}
                    cart
                  >
                    <span>
                      <i className="fas fa-credit-card mr-2" />
                      go to cart
                    </span>
                  </ButtonContainer>
                  {/* end of main buttons */}
                </div>
              </div>
            </div>
          </ModalContainer>
        );
      }}
    </DataConsumer>
  );
};

export default Modal;
