import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
  <SpinnerWrapper className="lds-ripple">
    <div />
    <div />
  </SpinnerWrapper>
);

const SpinnerWrapper = styled.div`
  .lds-ripple {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 64px;
    height: 64px;
  }

  .lds-ripple div {
    position: absolute;
    border: 4px solid #cef;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

export default Spinner;
