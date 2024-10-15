import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputText from '../input/InputText';
import InputSearch from '../input/InputSearch';
import ListView from '../list/ListView';
import Button from '../button/Button';
import ToggleButton from '../button/ToggleButton';
import Caption from '../typo/Caption';


const Sidebar = ({ calculateRoute, endAddress, setEndAddress, rearrangeMarker }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startAddress, setStartAddress] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleRouteCalculation = () => {
        calculateRoute(startAddress, endAddress);
    };


    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <SidebarTop>
                    <InputText label={'출발'} placeholder={'정확한 도로명 주소를 입력해주세요.'} onChange={(e) => setStartAddress(e.target.value)} />
                    <InputText label={'도착'} placeholder={'아래 리스트에서 장소를 선택해주세요.'} value={endAddress} onChange={(e) => setEndAddress(e.target.value)} />
                    <SidebarResult id='result'></SidebarResult>
                    <Button onClick={handleRouteCalculation}>
                        <Caption fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600" color="var(--White)">
                            경로 찾기
                        </Caption>
                    </Button>
                    <Button onClick={rearrangeMarker}>
                        <Caption fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600" color="var(--White)">
                            지도 정렬하기
                        </Caption>
                    </Button>
                </SidebarTop>
                <SidebarBottom>
                    <InputSearch placeholder={'정확한 도로명 주소를 입력해주세요.'} onChange={(e) => setSearchQuery(e.target.value)} />
                    <ListView setEndAddress={setEndAddress} searchQuery={searchQuery} calculateRoute={calculateRoute} />
                </SidebarBottom>
            </SidebarContainer>
            <ToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </>
    );
};


export default Sidebar;


const SidebarContainer = styled.div`
      width: ${(props) => (props.isOpen ? '30rem' : '0')};
      height: 100%;
      background-color: var(--White);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      padding: ${(props) => (props.isOpen ? '1.6rem' : '0')};
      transition: width 0.3s ease, padding 0.3s ease;
      overflow: hidden;
      z-index: 10;
      @media (max-width: 768px) {
        width: ${(props) => (props.isOpen ? '25rem' : '0')};
    }

    `;

const SidebarTop = styled.div`
        display: flex;
        flex-direction: column;
        gap: .8rem;
        width: 100%;
        height: fit-content;
    `;

const SidebarBottom = styled.div`
        display: flex;
        flex-direction: column;
        gap: .8rem;
        width: 100%;
        height: calc(100% - ${({ topHeight }) => topHeight}px);
        overflow-y: auto;  
    `;

const SidebarResult = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: .8rem;
    `;