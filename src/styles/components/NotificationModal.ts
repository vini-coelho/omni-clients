import styled, { keyframes } from 'styled-components';

const overlayKeyframes = keyframes`
  from {
    background: rgba(255,255,255, 0)
  }

  to {
    rgba(255,255,255, 0.8)
  }
`;

export const Modal = styled.div`
  background-color: rgba(0,0,0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${overlayKeyframes} 500ms;
`;

export const CardContainer = styled.div`
  width: 400px;

  background: var(--background);
  border-radius: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--foreground);
  }
  span {
    color: var(--foreground);
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  outline: none;
  background: var(--comment);
  color: var(--foreground);
  font-size: 1.4rem;
  font-weight: 600;
  font-family: 'Montserrat';
  width: 100%;
  height: 45px;
  border-radius: 0.4rem;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background: var(--comment)
  }
`;
