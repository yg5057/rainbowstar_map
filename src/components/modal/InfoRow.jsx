import React from 'react';
import styled from 'styled-components';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';

const InfoRow = ({ title, children }) => (
    <TextRow>
        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
            {title}
        </ParagraphS>
        <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
            {children}
        </Caption>
    </TextRow>
);

const TextRow = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    & > :first-child {
        width: 8rem; 
    }
    & > :nth-child(2) {
        flex-grow: 1;         
        flex-shrink: 1;       
        flex-basis: 0;        
        word-break: break-all; 
        overflow-wrap: break-word; 
        overflow: hidden;      
        white-space: normal;  
        min-width: 0;         
    }
`;

export default InfoRow;
