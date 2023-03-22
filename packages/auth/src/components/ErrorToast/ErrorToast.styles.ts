import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 1em;
`;

export const ToastTitle = styled.span`
  font-weight: bold;
`;

export const ErrorList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    font-size: small;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
`;
