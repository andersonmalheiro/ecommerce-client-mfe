import React from 'react';
import {
  Container,
  ErrorList,
  ErrorMessage,
  ToastTitle,
} from './ErrorToast.styles';

type FieldError = {
  key: string;
  message: string;
};

type Message = string | Array<FieldError>;

interface ErrorToastProps {
  title: string;
  errors: Message;
}

function errorIsString(value: Message): value is string {
  return typeof value === 'string';
}

function errorIsArray(value: Message): value is Array<FieldError> {
  return Array.isArray(value);
}

const ErrorToast = (props: ErrorToastProps) => {
  const { errors, title } = props;

  return (
    <Container>
      <ToastTitle>{title}</ToastTitle>
      {errorIsArray(errors) ? (
        <ErrorList>
          {errors.map(({ key, message }) => (
            <li key={key}>{message}</li>
          ))}
        </ErrorList>
      ) : (
        <ErrorMessage>{errors}</ErrorMessage>
      )}
    </Container>
  );
};

export default ErrorToast;
