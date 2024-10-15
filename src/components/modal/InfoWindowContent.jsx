import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTimes } from '@fortawesome/free-solid-svg-icons';

import ParagraphM from '../typo/ParagraphM';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';



const InfoWindowContent = ({ distance, duration, additionalInfo }) => {
    const [isVisible, setIsVisible] = useState(true); // 상태 추가

    const handleClose = () => {
        setIsVisible(false); // 상태 업데이트
    };

    // 컴포넌트가 안 보이게 될 경우 null을 반환
    if (!isVisible) return null;

    return (
        <OverlayContainer>
            {additionalInfo && (
                <>
                    <TitleWrapper>
                        <FontAwesomeIcon icon={faPaw} />
                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--White)">
                            {additionalInfo.title}
                        </ParagraphM>
                        <CloseButton onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} />
                        </CloseButton>
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
                                    평점
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.score} 점
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    면허 보유
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.license}
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                    홈페이지 주소
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.homePage}
                                </Caption>
                            </TextRow>
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
                                    연락처
                                </ParagraphS>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.phone1}
                                </Caption>
                            </TextRow>
                            <TextRow>
                                <div></div>
                                <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                    {additionalInfo.phone1}
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
     max-width: 30rem;
     height: fit-content;
     min-width: 25rem;
     border: none;  
     box-shadow: var(--DropShadow-Bottom-M);
     position: relative;
     z-index: 1; 
     // 포인터 추가
    &::after {
        content: '';
        position: absolute;
        top: 100%; // 컨테이너 아래 위치
        left: 50%; // 중앙 정렬
        transform: translateX(-50%); // 수평 중앙 정렬
        border-width: 1.6rem; // 삼각형 크기
        border-style: solid;
        border-color: #ffff transparent transparent transparent; // 삼각형 색상
    }
`;

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 1.4rem;
    align-items: center;
    align-self: stretch;
    gap: .8rem;
    border-radius: .6rem .6rem 0 0;
    background: var(--InfoWindow-title-bg);
    color: var(--White);

`;
const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--White);
    margin-left: auto; // TitleWrapper의 오른쪽 끝에 위치
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


export default InfoWindowContent;
