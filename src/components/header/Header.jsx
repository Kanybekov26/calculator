import React, { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const Header = ({setBackground}) => {

  const [isbisible, setbisible] = useState(false);

  const blueButtonHandler = () => {
    setBackground("black");
    setbisible(true)

  };
  const ButtonHandler = () => {
    setBackground();
    setbisible(false)

  };
  return (
    <Container >
      {isbisible ?  <Button onClick={ButtonHandler}>☀️</Button> :  
      <Button onClick={blueButtonHandler}>🌙</Button>}
    
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #00ff6a;
  margin-bottom:20px;
  padding-bottom:20px;
  padding-top:20px;
  
`;
