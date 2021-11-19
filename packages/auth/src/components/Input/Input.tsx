import React from "react";
import { Container, InputStyled, Label } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = (props: InputProps) => {
  const { label, ...rest } = props;

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputStyled {...rest} />
    </Container>
  );
};

export default Input;
