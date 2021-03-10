import styled from 'styled-components';

export const CustomFooter = styled.footer`
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
