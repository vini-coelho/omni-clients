import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  height: 100%;
  background: linear-gradient(-120deg, var(--comment) 20%, var(--background) 20%);
`;

export const Body = styled.div`
  max-width: 350px;
  width: 100%;
  border-radius: 3px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;

  @keyframes first {
    from {
      opacity: 60%;
      margin-top: 30px;
    }
  }
`;

export const Name = styled.h2`
  margin-bottom: 20px;
  font-weight: bold;
  color: var(--foreground);
  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;
`;

export const Subtitle = styled.span`
  margin-bottom: 20px;
  color: var(--foreground);
  animation-name: first;
  animation-duration: 600ms;
  animation-timing-function: ease-in-out;
`;
