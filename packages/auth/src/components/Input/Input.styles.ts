import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
`;

export const InputStyled = styled.input`
  border-radius: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  outline: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-left: 2px solid #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const RequiredIndicator = styled.span`
  &::before {
    content: '*';
    color: red;
    font-size: 14px;
  }
`;
