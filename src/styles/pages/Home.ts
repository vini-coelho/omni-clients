import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background: linear-gradient(100deg, var(--comment) 30%, var(--background) 30%);
`;

export const Body = styled.div`
  background: var(--white);
  max-width: 500px;
  flex: 1;
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

export const Footer = styled.footer`
  padding: 20px 0;
  display: flex;
  align-items: center;
  bottom: 0;
  a {
    font-family: 'Roboto';
    font-size: 1.4rem;
    color: var(--foreground);
    text-decoration: none;
    margin-left: 10px;
  }

  svg {
    fill: var(--foreground);
    height: 30px;
    width: 30px;
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

export const UsersListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserItemContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: var(--selection);
  border-radius: 0.5rem;

  padding: 20px 30px;
  margin-bottom: 10px;

  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  transition: border 200ms ease-in-out;

  border: 1px solid rgba(0,0,0,0);

  &:hover {
    border: 1px solid var(--green);
  }

  & > div {
    display:flex;
    flex-direction: column;
    flex: 1;
  }

  svg {
    fill: var(--foreground);
    height: 50px;
    width: 50px;
    background-color: var(--orange);
    border-radius: 50%;
    padding: 10px;
    margin-right: 15px;
  }
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 5px;
`;

export const UserEmail = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 5px;
`;

