import React from 'react';
import {
  ButtonBase,
  ButtonLinkBase,
  ButtonLinkPrimary,
  ButtonLinkSecondary,
  ButtonPrimary,
  ButtonSecondary,
} from './Button.styles';

type BtnVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: BtnVariant;
  isLink?: boolean;
  link?: string;
}

const Button = (props: ButtonProps) => {
  const { children, isLink, link, variant, ...rest } = props;

  if (isLink) {
    switch (variant) {
      case 'primary':
        return (
          <ButtonLinkPrimary to={link || ''}>{children}</ButtonLinkPrimary>
        );

      case 'secondary':
        return (
          <ButtonLinkSecondary to={link || ''}>{children}</ButtonLinkSecondary>
        );

      default:
        return <ButtonLinkBase to={link || ''}>{children}</ButtonLinkBase>;
    }
  } else {
    switch (variant) {
      case 'primary':
        return <ButtonPrimary {...rest}>{children}</ButtonPrimary>;

      case 'secondary':
        return <ButtonSecondary {...rest}>{children}</ButtonSecondary>;

      default:
        return <ButtonBase {...rest}>{children}</ButtonBase>;
    }
  }
};

export default Button;
