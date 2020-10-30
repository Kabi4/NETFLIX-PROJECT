import React, { useState, createContext, useContext, forwardRef } from "react";
import Cross from "../../Assets/Images/icons/close-slim.png";
import Add from "../../Assets/Images/icons/add.png";
import {
  Container,
  Inner,
  Body,
  Title,
  Frame,
  Header,
  Item,
} from "./Styles/Welcome";

const ToogleContext = createContext();
const Welcome = ({ children, ...props }) => {
  return (
    <Container  {...props}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Welcome.Title = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

Welcome.Frame = ({ children, ...props }) => {
  return <Frame {...props}>{children}</Frame>;
};

Welcome.Item = function WelcomeItem({ children, ...props }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToogleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...props}>{children}</Item>
    </ToogleContext.Provider>
  );
};

Welcome.Header = function WelcomHeader({ children, ...props }) {
  const { toggleShow, setToggleShow } = useContext(ToogleContext);
  return (
    <Header
      onClick={() => {
        setToggleShow((prevState) => {return !prevState;});
      }}
      {...props}
    >
      {children}
      {toggleShow?<img src={Cross} alt="Close" />:<img src={Add} alt="Open" />}
    </Header>
  );
};

Welcome.Body = forwardRef(function WelcomeBody({ children, ...props },ref) {
  const { toggleShow } = useContext(ToogleContext);
  return toggleShow?<Body ref={ref} {...props}>{children}</Body>:null;
});

export default Welcome;
