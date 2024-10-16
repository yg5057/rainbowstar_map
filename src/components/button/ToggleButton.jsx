import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
`
const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`

const Button = styled.button`
  position: fixed;
  top: 20px;
  left: ${(props) => (props.isOpen ? '30rem' : '2rem')};
  width: 4rem;
  height: 4rem;
  background-color: var(--Default-Blue);
  color: white;
  border: none;
  cursor: pointer;
  transition: left 0.3s ease;
  font-size: 2rem;
  box-shadow: var(--DropShadow-Bottom-XS);
  z-index: 10;
    &:hover { animation: ${hoverAnimation} 0.2s forwards; }
    &:active { animation: ${clickAnimation} 0.2s ease-out; }
    
    @media (max-width: 480px) {
      left: ${(props) => (props.isOpen ? '25rem' : '2rem')};
      }
`;

const ToggleButton = ({ isOpen, toggleSidebar }) => {
  return (
    <Button isOpen={isOpen} onClick={toggleSidebar}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </Button>
  );
};

export default ToggleButton;
