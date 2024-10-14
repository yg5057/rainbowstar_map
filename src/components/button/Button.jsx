import React from 'react';
import styled, { keyframes } from 'styled-components';


const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`
const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`
const StyledButton = styled.button.attrs(props => ({
  style: {
    padding: props.padding || 'auto',
    marginBottom: props.marginBottom || '0',
    background: props.background || 'auto',
    width: props.width || 'auto',
  },
}))`
    display: flex;
    width: 100%;
    height: 3rem;
    padding: 0.6rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    border-radius: 20px;
    background: var(--Default-Blue);
    box-shadow: var(--DropShadow-Bottom-XS);
    cursor: pointer;
    user-select: none;
    /* &:hover { 
      animation: ${hoverAnimation} 0.2s forwards; 
    } */
    &:active { 
      animation: ${clickAnimation} 0.2s ease-out; 
    }
`;

const Button = ({ children, onClick, padding, marginBottom, background, width }) => {
  return (
    <StyledButton onClick={onClick} padding={padding} marginBottom={marginBottom} background={background} width={width}>
      {children}
    </StyledButton>
  );
};

export default Button;


