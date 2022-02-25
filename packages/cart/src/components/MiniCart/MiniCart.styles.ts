import styled from 'styled-components';

interface MiniCartContainerProps {
  dragging: boolean;
}

export const MiniCartContainer = styled.div<MiniCartContainerProps>`
  position: relative;
  /* padding: ${({ dragging }) => (dragging ? '0 5px' : 'unset')}; */
  border: ${({ dragging }) => (dragging ? '2px dashed #000' : 'unset')};
  background: ${({ dragging }) => (dragging ? '#b2dfdb' : 'unset')};
  transition: all 0.3s ease-in-out;
`;

export const MiniCartButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const MiniCartItemsCount = styled.span`
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

export const MiniCartIcon = styled.img`
  height: 40px;
  width: 40px;
`;
