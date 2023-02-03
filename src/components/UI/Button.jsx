import React, { memo } from 'react'
import styled from 'styled-components'

const Button = ({children,onClick}) => {
  return (
    <div>
    <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </div>
  )
}

export default memo(Button)


const ButtonStyled = styled.button`
  background-color:blue;
  color:white;
  border: none;
  border-radius:3px;
  margin-right:10px;
  cursor: pointer;
  :hover{
    background-color:blueviolet;
  }
`