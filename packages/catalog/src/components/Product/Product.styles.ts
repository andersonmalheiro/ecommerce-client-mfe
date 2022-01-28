import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: #ffffff;
  text-decoration: none;
  border-radius: 0px;
  border: 1px solid #000;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  max-height: fit-content;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
`;



export const ProductImg = styled.img`
  height: 150px;
  width: 100%;
`;

export const ProductMeta = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  justify-content: space-evenly;

  h1 {
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }

  p {
    font-size: 12px;
    color: #272727;
  }
`;
