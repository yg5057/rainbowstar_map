import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';

// const ListView = ({ setEndAddress, searchQuery }) => {
//     const [places, setPlaces] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchPlaces = async () => {
//             try {
//                 const response = await fetch('/data/places.json');
//                 if (!response.ok) {
//                     throw new Error('네트워크 응답이 좋지 않습니다.');
//                 }
//                 const data = await response.json();
//                 setPlaces(data);
//             } catch (error) {
//                 console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPlaces();
//     }, []);

//     const setDestination = (place) => {
//         alert(`도착지 위치가 "${place.title}"으로 선택되었습니다.`);
//         setEndAddress(place.address);
//     };

//     if (loading) {
//         return <div>로딩 중...</div>;
//     }

//     const filteredPlaces = places.filter(place =>
//         place.title.includes(searchQuery) || place.address.includes(searchQuery)
//     );


//     return (
//         <ListContainer>
//             {filteredPlaces.map((place, index) => {
//                 const color = areaColors[place.area] || '#248CFA';
//                 return (
//                     <ListItem key={index} onClick={() => setDestination(place)}>
//                         <Eclipse color={color}>{place.area}</Eclipse>
//                         <TextWrap>
//                             <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="400">{place.title}</ParagraphS>
//                             <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="400">{place.address}</Caption>
//                         </TextWrap>
//                     </ListItem>
//                 );
//             })}
//         </ListContainer>
//     );
// };

const ListView = ({ setEndAddress, searchQuery }) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch('/data/places.json');
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    const setDestination = (place) => {
        setEndAddress(place.address); // 도착지 주소 업데이트
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    const filteredPlaces = places.filter(place =>
        place.title.includes(searchQuery) || place.address.includes(searchQuery)
    );

    return (
        <ListContainer>
            {filteredPlaces.map((place, index) => {
                const color = areaColors[place.area] || '#248CFA';
                return (
                    <ListItem key={index} onClick={() => setDestination(place)}>
                        <Eclipse color={color}>{place.area}</Eclipse>
                        <TextWrap>
                            <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="400">{place.title}</ParagraphS>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="400">{place.address}</Caption>
                        </TextWrap>
                    </ListItem>
                );
            })}
        </ListContainer>
    );
};

export default ListView;



const areaColors = {
    '강원': '#FF66C4',
    '경기': '#10C0DF',
    '경남': '#D9BD4C',
    '경북': '#004AAD',
    '광주': '#FF5758',
    '대구': '#004AAD',
    '부산': '#D9BD4C',
    '세종': '#58CD94',
    '울산': '#D9BD4C',
    '인천': '#10C0DF',
    '전남': '#FF5758',
    '전북': '#FF5758',
    '충남': '#58CD94',
    '충북': '#58CD94'
};

const ListContainer = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 7rem;
    padding: 1rem;
    align-items: center;
    gap: 0.8rem;
    border-bottom: 1px solid var(--Grey);
    background: var(--White);
    cursor: pointer;
`;

const Eclipse = styled.div`
    display: flex;
    width: 4.5rem;
    height: 4.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 50px;
    background-color: ${props => props.color || 'var(--Default-Blue);'};
    color: var(--White);
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  align-items: flex-start;
  gap: .6rem;
`;

