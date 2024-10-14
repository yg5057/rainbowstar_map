import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import ParagraphM from '../typo/ParagraphM';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';



const InfoWindowContent = ({ distance, duration, additionalInfo }) => {
    return (
        <OverlayContainer>
            {additionalInfo && (
                <>
                    <TitleWrapper>
                        <FontAwesomeIcon icon={faPaw} />
                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--White)">
                            {additionalInfo.title}
                        </ParagraphM>
                    </TitleWrapper>
                    <ContentsWrapper>
                        <ContentsTop>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    거리
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {distance}km
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    소요 시간
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {duration}
                                </Caption>
                            </TextRow>
                        </ContentsTop>
                        <ContentsBottom>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    주소
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.address}
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    정보
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.info}
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    점수
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.score}
                                </Caption>
                            </TextRow>
                        </ContentsBottom>
                    </ContentsWrapper>
                </>
            )}
        </OverlayContainer>
    );
};

const OverlayContainer = styled.div`
    display: flex;
     flex-direction: column;
     align-items: flex-start;
     width: fit-content;
     height: fit-content;
     min-width: 25rem;
     border: none;  
     /* box-shadow: var(--DropShadow-Bottom-M); */
     position: relative;
     z-index: 1; 
`;

const TitleWrapper = styled.div`
    display: flex;
    padding: 1rem 1.4rem;
    align-items: center;
    align-self: stretch;
    gap: .8rem;
    border-radius: .6rem .6rem 0 0;
    background: var(--InfoWindow-title-bg);
    color: var(--White);

`;
const ContentsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    padding: 1.4rem;
    gap: .8rem;
    border-radius: 0 0 .6rem .6rem;
    background: var(--White);
`;
const ContentsTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
`;
const ContentsBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
`;
const TextRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: Row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

export default InfoWindowContent;
