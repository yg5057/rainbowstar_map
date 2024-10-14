import React from 'react';
import styled from 'styled-components';


const StyledText = styled.p.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
        fontFamily: props.fontFamily || 'auto',
    },
}))`
    color: var(--Black, #1b1b1b);
    font-family: var(--font-family-primary);
    font-size: 20px;
    font-style: normal;
    line-height: 28px; 
`;

const Subtitle = ({ children, color, fontWeight, textAlign, fontFamily }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign} fontFamily={fontFamily}>
            {children}
        </StyledText>
    );
};

export default Subtitle;
