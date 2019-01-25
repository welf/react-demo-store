import React from "react";
import { ModalContainer, closeIfClickIsOutOfElement } from "./ModalContainer";
import { DataConsumer } from "../context";

const MessageAfterPayment = ({ status, onClick }) => {
  return (
    <React.Fragment>
      <h5
        className={`text-${
          status === "success" ? "primary" : "danger"
        } text-title text-uppercase`}
      >
        {status === "success"
          ? "Congratulation, everything went fine!"
          : status === "cancelled"
          ? "You have cancelled your payment"
          : "Oops! Something went wrong. Let's try again!"}
      </h5>
      <button
        className={`btn btn-outline-${
          status === "success" ? "primary" : "danger"
        } text-uppercase px-4 mt-3`}
        onClick={onClick}
      >
        ok
      </button>
    </React.Fragment>
  );
};

const PaymentNotification = () => {
  return (
    <DataConsumer>
      {({
        closeModal,
        clearPaymentInfo,
        paymentSuccess,
        paymentCancelled,
        paymentError
      }) => {
        return (
          <ModalContainer
            onClick={event => {
              closeIfClickIsOutOfElement(event, "modal", () => {
                closeModal();
                clearPaymentInfo();
              });
            }}
          >
            <div className="container">
              <div className="row">
                <div
                  id="modal"
                  className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-4"
                >
                  {paymentSuccess ? (
                    <MessageAfterPayment
                      status="success"
                      onClick={() => {
                        closeModal();
                        clearPaymentInfo();
                      }}
                    />
                  ) : null}
                  {paymentCancelled ? (
                    <MessageAfterPayment
                      status="cancelled"
                      onClick={() => {
                        closeModal();
                        clearPaymentInfo();
                      }}
                    />
                  ) : null}
                  {paymentError ? (
                    <MessageAfterPayment
                      status="error"
                      onClick={() => {
                        closeModal();
                        clearPaymentInfo();
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </ModalContainer>
        );
      }}
    </DataConsumer>
  );
};

export default PaymentNotification;
