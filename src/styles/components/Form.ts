import styled from 'styled-components';

interface InputProps {
  error: boolean;
}

export const Form = styled.form`
  background: var(--background);
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;

  display: flex;
  flex: 1;

  color: white;
  font-family: 'Montserrat';

  height: 100%;

  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    background: none;
    color: white;
    font-family: 'Montserrat';
  } */
`;

export const InputContainer = styled.div<InputProps>`
  background: var(--current-line);
  border: ${p => (p.error ? '1px solid var(--red)' : '')};

  display: flex;
  align-items: center;

  height: 45px;
  width: 100%;

  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);

  border-radius: 0.2rem;

  margin-bottom: 0.8rem;
`;

export const InputIcon = styled.div`
  height: 100%;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--foreground);
  }
`;

export const Label = styled.span``;

export const Button = styled.button`
  outline: none;
  background: var(--pink);
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
