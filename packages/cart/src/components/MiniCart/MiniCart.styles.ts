import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const CartButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CartItemsCount = styled.span`
  position: absolute;
  height: 15px;
  width: 15px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  top: -3px;
  right: -3px;
  color: #fff;
`;

export const CartIcon = styled.img`
  height: 40px;
  width: 40px;
`;
