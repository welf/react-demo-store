import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { DataConsumer } from "../context";

const Modal = () => {
  const closeIfClickIsOutOfElement = (event, elementId, fn) => {
    const parentElement = document.getElementById(elementId);

    if (parentElement.contains(event.target)) {
      return;
    }
    fn();
  };

  return (
    <DataConsumer>
      {({ productInModal, closeModal }) => {
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
                  <Link to="/">
                    <ButtonContainer onClick={closeModal}>
                      to shopping
                    </ButtonContainer>
                    <ButtonContainer cart>
                      <span>
                        <i className="fas fa-credit-card mr-2" />
                        go to cart
                      </span>
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContainer>
        );
      }}
    </DataConsumer>
  );
};

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;

  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
