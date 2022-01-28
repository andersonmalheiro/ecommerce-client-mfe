import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
`;

export const GoBackBtn = styled(Link)`
  border-radius: 0;
  padding: 5px 10px;
  width: fit-content;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
  text-decoration: none;
  font-size: 13px;
  background: #000;
  border-color: #000;
  color: #fff;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const DetailsCard = styled.div`
  border: 1px solid black;
  border-radius: 0;
  padding: 0;
  height: 300px;
  width: 100%;
  display: flex;
  background: #fff;
`;

export const ProductImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProductImg = styled.img`
  height: 300px;
  width: auto;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1em;
  justify-content: space-between;
`;

export const ProductName = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #000000;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #272727;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  color: #000;
  opacity: 0.7;
  font-size: 18px;
`;
