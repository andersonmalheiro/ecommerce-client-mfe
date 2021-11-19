import React from "react";
import {
  Container,
  InputStyled,
  Label,
  RequiredIndicator,
} from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = (props: InputProps) => {
  const { label, required, ...rest } = props;

  return (
    <Container>
      {label && (
        <Label>
          {label} {required && <RequiredIndicator />}{" "}
        </Label>
      )}
      <InputStyled required={required} {...rest} />
    </Container>
  );
};

export default Input;
