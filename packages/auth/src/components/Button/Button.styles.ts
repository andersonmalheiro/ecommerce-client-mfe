import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const baseStyle = css({
  borderRadius: 0,
  padding: "5px 10px",
  width: "fit-content",
  border: "1px solid",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  outline: "none",
  textDecoration: "none",
  fontSize: "13px",
});

const basePrimary = css`
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

const baseSecondary = css`
  background: #fff;
  border-color: #000;
  color: #000;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  &:focus {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonBase = styled.button`
  ${baseStyle}
`;

export const ButtonPrimary = styled(ButtonBase)`
  ${basePrimary}
`;

export const ButtonSecondary = styled(ButtonBase)`
  ${baseSecondary}
`;

export const ButtonLinkBase = styled(Link)`
  ${baseStyle};
`;

export const ButtonLinkPrimary = styled(ButtonLinkBase)`
  ${basePrimary};
`;

export const ButtonLinkSecondary = styled(ButtonLinkBase)`
  ${baseSecondary};
`;
