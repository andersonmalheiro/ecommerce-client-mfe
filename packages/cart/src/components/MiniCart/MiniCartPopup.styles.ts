import styled, { css } from 'styled-components';

type CartContainerProps = {
  side: 'left' | 'right';
  offset: number;
};

export const CartContainer = styled.div<CartContainerProps>`
  border: 1px solid #000;
  border-radius: 0;
  padding: 10px;
  background: #fff;
  position: absolute;
  min-height: 200px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  top: 40px;

  ${({ offset, side }) =>
    css`
      left: ${side === 'left' ? `${offset}px` : 'unset'};
      right: ${side === 'right' ? `${offset}px` : 'unset'};
    `}

  &::before {
    content: '';
    border-bottom: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: -10px;

    ${({ side }) =>
      css`
        left: ${side === 'left' ? '5px' : 'unset'};
        right: ${side === 'right' ? '5px' : 'unset'};
      `}
  }
`;

export const CartTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CartContent = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
`;

export const CartEmptyMsg = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  font-size: 14px;

  .name {
    font-weight: bold;
  }

  .count {
    margin-right: 5px;
  }

  .value {
  }
`;
