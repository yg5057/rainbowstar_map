import React from 'react';
import styled from 'styled-components';

import ParagraphS from '../typo/ParagraphS';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    width: 100%;
    height: 3rem;
    padding: 0.6rem 1.2rem;
    border-radius: 20px;
    border: 0.5px solid var(--Input-border);
    background: var(--Input-bg);
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  width: 15%;
`;

const StyledInput = styled.input`
    flex: 1; 
    padding: 0.4rem 0.8rem;
    border: none;
    background: transparent;
    color: var(--Black);
    font-family: var(--font-family-primary);
    font-size: 1rem;
    font-style: normal;
    line-height: 1.4rem; 
    box-sizing: border-box;
`;



const InputText = ({ id, label, value, onChange, placeholder, disabled, readOnly, required }) => (
    <InputWrapper>
        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--Input-label)">
            <Label htmlFor={id}>{label}</Label>
        </ParagraphS>
        <StyledInput
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
        >
        </StyledInput>

    </InputWrapper>
);

export default InputText;
