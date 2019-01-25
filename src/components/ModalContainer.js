import styled from "styled-components";

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

const closeIfClickIsOutOfElement = (event, elementId, fn) => {
  const parentElement = document.getElementById(elementId);

  if (parentElement.contains(event.target)) {
    return;
  }
  fn();
};

export { ModalContainer, closeIfClickIsOutOfElement };
