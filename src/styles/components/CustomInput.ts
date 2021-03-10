import styled from 'styled-components';

import InputMask from 'react-input-mask';

interface InputProps {
  error: boolean;
}

export const MaskedInput = styled(InputMask)`
  outline: none;

  display: flex;
  flex: 1;

  color: white;
  font-family: 'Montserrat';

  height: 100%;
`;

export const Input = styled.input`
  outline: none;

  display: flex;
  flex: 1;

  color: white;
  font-family: 'Montserrat';

  height: 100%;
`;

export const InputContainer = styled.div<InputProps>`
  background: var(--background);
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
