import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h1.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
        fontFamily: props.fontFamily || 'auto',
    },
}))`
    color: var(--Black, #1b1b1b);
    font-family: var(--font-family-primary);
    font-size: 72px;
    font-style: normal;
    line-height: 80px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const H1 = ({ children, color, fontWeight, textAlign, fontFamily }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign} fontFamily={fontFamily}>
            {children}
        </StyledText>
    );
};

export default H1;
