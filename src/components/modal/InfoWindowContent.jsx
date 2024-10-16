import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTimes, faCircleRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import ParagraphM from '../typo/ParagraphM';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';
import InfoRow from './InfoRow';



const InfoWindowContent = ({ distance, duration, additionalInfo }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const handleClose = () => { setIsVisible(false); };
    const toggleDetails = () => { setIsDetailsVisible(prev => !prev); };
    const displayInfo = (info) => { return info ? info : '정보 없음'; };

    const goToHomepage = () => { if (additionalInfo.homePage) { window.open(additionalInfo.funeralPriceUrl, '_blank'); } };
    const goToPrice = () => { if (additionalInfo.funeralPriceUrl) { window.open(additionalInfo.funeralPriceUrl, '_blank'); } };
    const goToReview1 = () => { if (additionalInfo.review1) { window.open(additionalInfo.review1, '_blank'); } };
    const goToReview2 = () => { if (additionalInfo.review2) { window.open(additionalInfo.review2, '_blank'); } };
    const goToReview3 = () => { if (additionalInfo.review3) { window.open(additionalInfo.review3, '_blank'); } };
    const goToAllReview = () => { if (additionalInfo.url) { window.open(additionalInfo.url, '_blank'); } };

    if (!isVisible) return null;

    const images = Object.values(additionalInfo.photo || {});

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <OverlayContainer>
            <TitleWrapper>
                <FontAwesomeIcon icon={faPaw} />
                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--White)">
                    {displayInfo(additionalInfo.title)}
                </ParagraphM>
                <CloseButton onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
            </TitleWrapper>
            <ContentsWrapper>
                <ContentsPhoto>
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <ImageWrapper key={index}>
                                <Image src={img} alt={`Image ${index + 1}`} />
                            </ImageWrapper>
                        ))}
                    </Slider>
                </ContentsPhoto>
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
                <ContentsMiddle>
                    <TextRowTable onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            상세 정보 보기
                        </ParagraphS>
                        <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: "#375E99", transform: isDetailsVisible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                    </TextRowTable>
                </ContentsMiddle>
                <ContentsBottom style={{ maxHeight: isDetailsVisible ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                    <InfoRow title="평점">{displayInfo(additionalInfo.score)} 점</InfoRow>
                    <InfoRow title="면허 보유">{displayInfo(additionalInfo.license)}</InfoRow>
                    <TextRow onClick={goToHomepage} style={{ cursor: 'pointer' }}>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            홈페이지 주소
                        </ParagraphS>
                        <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                            {displayInfo(additionalInfo.homePage)}
                        </Caption>
                    </TextRow>
                    <InfoRow title="주소">{displayInfo(additionalInfo.address)}</InfoRow>
                    <InfoRow title="연락처">{displayInfo(additionalInfo.phone1)}</InfoRow>
                    <TextRow>
                        <div />
                        <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                            {displayInfo(additionalInfo.phone2)}
                        </Caption>
                    </TextRow>
                    <TextRow>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            장례 가격표
                        </ParagraphS>
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                5kg
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.funeralPrice5kg)} 원
                            </Caption>
                        </TextRowTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                15kg
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.funeralPrice15kg)} 원
                            </Caption>
                        </TextRowTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                1kg 소동물
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.funeralPrice1kg)} 원
                            </Caption>
                        </TextRowTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowTable onClick={goToPrice} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                가격 고지 자세히 보기
                            </Caption>
                            <FontAwesomeIcon icon={faCircleRight} style={{ color: "#375E99", }} />
                        </TextRowTable>
                    </TextRow>
                    <InfoRow title="관, 수의 준비">{displayInfo(additionalInfo.funeralSupplies)}</InfoRow>
                    <InfoRow title="봉안 비용표">{displayInfo(additionalInfo.enshrinementPriceTag)}</InfoRow>
                    <TextRow>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            대표 후기
                        </ParagraphS>
                        <TextRowReviewTable onClick={goToReview1} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 1
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.review1)}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowReviewTable onClick={goToReview2} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 2
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.review2)}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowReviewTable onClick={goToReview3} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 3
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(additionalInfo.review3)}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowTable onClick={goToAllReview} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                전체 후기 보러 가기
                            </Caption>
                            <FontAwesomeIcon icon={faCircleRight} style={{ color: "#375E99", }} />
                        </TextRowTable>
                    </TextRow>
                </ContentsBottom>
            </ContentsWrapper>
        </OverlayContainer>
    );
};

export default InfoWindowContent;


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
     z-index: 99999; 
     &::after {
            content: '';
            position: absolute;
            top: 100%; 
            left: 50%; 
            transform: translateX(-50%); 
            border-width: 1.6rem;
            border-style: solid;
            border-color: #ffff transparent transparent transparent; 
        }
        .slick-prev:before, .slick-next:before {
            font-family: 'slick';
            font-size: 20px;
            line-height: 1;
            opacity: .6;
            color: var(--InfoWindow-conts-title);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
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
const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--White);
    margin-left: auto; 
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
    gap: 1.6rem;
    border-radius: 0 0 .6rem .6rem;
    background: var(--White);
`;
const ContentsPhoto = styled.div`
    width: 100%;
    height: 15rem; 
`;
const ImageWrapper = styled.div`
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    height:  13rem; 
    max-height: 100%; 
    object-fit: cover; 
`;
const ContentsTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .2rem;
`;
const ContentsMiddle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const ContentsBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .4rem;
    border-radius: 0 0 .6rem .6rem;
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

const TextRowTable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const TextRowReviewTable = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: center;
    gap: .8rem;

    & > :first-child {
        width: 4rem; 
    }
    & > :nth-child(2) {
        flex-grow: 1;         
        flex-shrink: 1;       
        flex-basis: 0;        
        word-break: break-all; 
        overflow-wrap: break-word; 
        overflow: hidden;      
        white-space: nowrap; 
        min-width: 0;         
        text-overflow: ellipsis;     
    }
`

