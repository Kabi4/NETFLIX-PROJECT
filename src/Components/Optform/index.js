import React from 'react';
import { Container, Input, Break, Button, Text } from './Styles/Optform';
import RightArrow from "../../Assets/Images/icons/chevron-right.png";
export default function Optform({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Optform.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Optform.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src={RightArrow} alt="Try Now" />
    </Button>
  );
};

Optform.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Optform.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};