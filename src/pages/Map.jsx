import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Sidebar from '../components/sidebar/Sidebar';
import InfoWindowContent from '../components/modal/InfoWindowContent';
import CustomOverlayContent from '../components/modal/CustomOverlayContent';
import ParagraphL from '../components/typo/ParagraphL';



// 마커 이미지
import pink from '../assets/images/pink.png';
import skyblue from '../assets/images/skyblue.png';
import yellow from '../assets/images/yellow.png';
import blue from '../assets/images/blue.png';
import red from '../assets/images/red.png';
import green from '../assets/images/green.png';

const { kakao } = window;

const Map = () => {
    const [map, setMap] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [currentPolyline, setCurrentPolyline] = useState(null);
    const [currentOverlay, setCurrentOverlay] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [endAddress, setEndAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const areaImageMap = {
        '강원': pink, '경기': skyblue, '경남': yellow, '경북': blue, '광주': red, '대구': blue, '부산': yellow, '세종': green, '울산': yellow, '인천': skyblue, '전남': red, '전북': red, '충남': green, '충북': green
    };



    //지도 초기 설정
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5665, 126.9780),
            level: 13,
            draggable: true,
            scrollwheel: true,
            disableDoubleClickZoom: false
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);

        const newGeocoder = new kakao.maps.services.Geocoder();
        setGeocoder(newGeocoder);
    }, []);




    // 마커 추가 함수
    const addMarkersFromPlaces = () => {
        if (!geocoder || !map) return;

        fetch('/data/places_copy.json')
            //  fetch('/data/places.json')
            .then(response => response.json())
            .then(data => {
                setPlaces(data);
                data.forEach(place => {
                    geocoder.addressSearch(place.address, (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            const position = new kakao.maps.LatLng(result[0].y, result[0].x);
                            const imageSrc = areaImageMap[place.area] || 'default_marker.png';
                            const markerImage = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(25, 36.2));

                            const marker = new kakao.maps.Marker({
                                position,
                                title: place.title,
                                image: markerImage,
                            });

                            marker.setMap(map);
                            marker.setClickable(true);
                            marker.kakaoPlaceData = place;

                            kakao.maps.event.addListener(marker, 'click', () => handleMarkerClick(marker, place));
                            setMarkers(prev => [...prev, marker]);
                        }
                    });
                });
            })
            .catch(error => console.error("장소 마커 추가 중 오류 발생:", error));
    };


    // 마커 클릭 핸들러 함수
    const handleMarkerClick = (marker, place) => {
        addCustomOverlay(marker, place);
    };

    const addCustomOverlay = (marker, place) => {
        setEndAddress(place.address);

        const additionalInfo = {
            area: place.area,
            title: place.title,
            license: place.license,
            photo: place.photo,
            homePage: place.homePage,
            address: place.address,
            phone1: place.phone1,
            phone2: place.phone2,
            score: place.score,
            funeralPrice5kg: place.funeralPrice5kg,
            funeralPrice15kg: place.funeralPrice15kg,
            funeralPrice1kg: place.funeralPrice1kg,
            funeralPriceUrl: place.funeralPriceUrl,
            funeralSupplies: place.funeralSupplies,
            enshrinementPriceTag: place.enshrinementPriceTag,
            memorialStone: place.memorialStone,
            memorialStonePrice: place.memorialStonePrice,
            review1: place.review1,
            review2: place.review2,
            review3: place.review3,
            url: place.url,
        };

        const overlayContent = document.createElement('div');
        ReactDOM.render(
            <CustomOverlayContent
                additionalInfo={additionalInfo}
            />,
            overlayContent
        );

        const customOverlay = new kakao.maps.CustomOverlay({
            position: marker.getPosition(),
            content: overlayContent,
            xAnchor: 0.6,
            yAnchor: 1.15,
            zIndex: 2,
        });

        if (currentOverlay) {
            currentOverlay.setMap(null);
        }
        customOverlay.setMap(map);
        setCurrentOverlay(customOverlay);
    };

    useEffect(() => {
        return () => {
            if (currentOverlay) {
                currentOverlay.setMap(null);
            }
        };
    }, [currentOverlay]);


    useEffect(() => {
        if (map && geocoder) {
            addMarkersFromPlaces();
        }
    }, [map, geocoder]);



    // 리스트 클릭 함수
    const showOverlay = (address) => {
        const selectedPlace = places.find(place => place.address === address);
        if (!selectedPlace) return;

        geocoder.addressSearch(address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const position = new kakao.maps.LatLng(result[0].y, result[0].x);

                const additionalInfo = {
                    area: selectedPlace.area,
                    title: selectedPlace.title,
                    license: selectedPlace.license,
                    photo: selectedPlace.photo,
                    homePage: selectedPlace.homePage,
                    address: selectedPlace.address,
                    phone1: selectedPlace.phone1,
                    phone2: selectedPlace.phone2,
                    score: selectedPlace.score,
                    funeralPrice5kg: selectedPlace.funeralPrice5kg,
                    funeralPrice15kg: selectedPlace.funeralPrice15kg,
                    funeralPrice1kg: selectedPlace.funeralPrice1kg,
                    funeralPriceUrl: selectedPlace.funeralPriceUrl,
                    funeralSupplies: selectedPlace.funeralSupplies,
                    enshrinementPriceTag: selectedPlace.enshrinementPriceTag,
                    memorialStone: selectedPlace.memorialStone,
                    memorialStonePrice: selectedPlace.memorialStonePrice,
                    review1: selectedPlace.review1,
                    review2: selectedPlace.review2,
                    review3: selectedPlace.review3,
                    url: selectedPlace.url,
                };


                const overlayContent = document.createElement('div');
                ReactDOM.render(
                    <CustomOverlayContent
                        additionalInfo={additionalInfo}
                    />,
                    overlayContent
                );

                const customOverlay = new kakao.maps.CustomOverlay({
                    position,
                    content: overlayContent,
                    xAnchor: 0.6,
                    yAnchor: 1.15,
                    zIndex: 2,
                });

                if (currentOverlay) {
                    currentOverlay.setMap(null);
                }

                customOverlay.setMap(map);
                setCurrentOverlay(customOverlay);
            }
        });
    };


    // 경로 계산 함수
    const calculateRoute = (startAddress, endAddress) => {
        if (!startAddress || !endAddress) return;

        setLoading(true);

        if (currentPolyline) {
            currentPolyline.setMap(null);
            setCurrentPolyline(null);
        }

        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
        if (currentOverlay) {
            currentOverlay.setMap(null);
            setCurrentOverlay(null);
        }

        geocoder.addressSearch(startAddress, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const startPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(startPosition);

                geocoder.addressSearch(endAddress, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const endPosition = new kakao.maps.LatLng(result[0].y, result[0].x);

                        const apiUrl = `https://apis-navi.kakaomobility.com/v1/directions?origin=${startPosition.getLng()},${startPosition.getLat()}&destination=${endPosition.getLng()},${endPosition.getLat()}&priority=RECOMMEND&vehicle=car`;

                        fetch(apiUrl, {
                            headers: {
                                "Authorization": "KakaoAK 8e2c134c22f8c379da88ce3fc7bc85a4"
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                const route = data.routes[0];
                                const distance = route.summary.distance;
                                const duration = route.summary.duration;

                                const path = route.sections.flatMap(section =>
                                    section.roads.flatMap(road =>
                                        road.vertexes.map((v, i) => i % 2 === 0 ? new kakao.maps.LatLng(road.vertexes[i + 1], v) : null).filter(v => v)
                                    )
                                );

                                const polyline = new kakao.maps.Polyline({
                                    path: path,
                                    strokeWeight: 5,
                                    strokeColor: '#00BFFF',
                                    strokeOpacity: 0.8,
                                    strokeStyle: 'solid'
                                });

                                polyline.setMap(map);
                                setCurrentPolyline(polyline);

                                const startMarker = new kakao.maps.Marker({
                                    position: startPosition,
                                    title: '출발지',
                                    image: new kakao.maps.MarkerImage('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', new kakao.maps.Size(30, 40))
                                });
                                startMarker.setMap(map);
                                setMarkers(prev => [...prev, startMarker]);

                                const endMarker = new kakao.maps.Marker({
                                    position: endPosition,
                                    title: '도착지'
                                });
                                endMarker.setMap(map);
                                setMarkers(prev => [...prev, endMarker]);


                                const distanceInKm = (distance / 1000).toFixed(1);
                                const hours = Math.floor(duration / 3600);
                                const minutes = Math.floor((duration % 3600) / 60);
                                const durationString = `${hours}시간 ${minutes}분`;


                                const selectedPlace = places.find(place => place.address === endAddress);
                                const additionalInfo = {
                                    area: selectedPlace?.area,
                                    title: selectedPlace?.title,
                                    license: selectedPlace?.license,
                                    photo: selectedPlace?.photo,
                                    homePage: selectedPlace?.homePage,
                                    address: selectedPlace?.address,
                                    phone1: selectedPlace?.phone1,
                                    phone2: selectedPlace?.phone2,
                                    score: selectedPlace?.score,
                                    funeralPrice5kg: selectedPlace?.funeralPrice5kg,
                                    funeralPrice15kg: selectedPlace?.funeralPrice15kg,
                                    funeralPrice1kg: selectedPlace?.funeralPrice1kg,
                                    funeralPriceUrl: selectedPlace?.funeralPriceUrl,
                                    funeralSupplies: selectedPlace?.funeralSupplies,
                                    enshrinementPriceTag: selectedPlace?.enshrinementPriceTag,
                                    memorialStone: selectedPlace?.memorialStone,
                                    memorialStonePrice: selectedPlace?.memorialStonePrice,
                                    review1: selectedPlace?.review1,
                                    review2: selectedPlace?.review2,
                                    review3: selectedPlace?.review3,
                                    url: selectedPlace?.url,
                                };

                                const overlayContent = document.createElement('div');

                                ReactDOM.render(
                                    <InfoWindowContent
                                        startAddress={startAddress}
                                        endAddress={endAddress}
                                        distance={distanceInKm}
                                        duration={durationString}
                                        additionalInfo={additionalInfo}
                                    />,
                                    overlayContent
                                );

                                const customOverlay = new kakao.maps.CustomOverlay({
                                    position: endPosition,
                                    content: overlayContent,
                                    xAnchor: 0.6,
                                    yAnchor: 1.15,
                                    zIndex: 2,
                                });

                                customOverlay.setMap(map);
                                setCurrentOverlay(customOverlay);

                                setLoading(false);
                            })
                            .catch(error => {
                                console.error('경로 검색 중 오류 발생:', error);
                                setLoading(false);
                            });
                    } else {
                        setLoading(false);
                    }
                });
            } else {
                setLoading(false);
            }
        });
    };


    const rearrangeMarker = () => {
        window.location.reload();
    };


    return (
        <>
            <Sidebar calculateRoute={calculateRoute} endAddress={endAddress} setEndAddress={setEndAddress} rearrangeMarker={rearrangeMarker} showOverlay={showOverlay} />
            <MapSection id="map"></MapSection>
            {loading && (
                <LoadingOverlay>
                    <Loader />
                    <ParagraphL color='var(--Default-Blue)' fontWeight='600' textAlign='center'>
                        경로를 찾는 중입니다.
                    </ParagraphL>
                </LoadingOverlay>
            )}
        </>
    );
};

export default Map;

const MapSection = styled.section`
    display: flex;
    width: 100%;
    min-width: 76.7rem;
    height: 100vh;
    padding: 3rem;
    align-items: flex-start;
    gap: 1rem;
    position: relative;  
    z-index: 0; 
`;


const LoadingOverlay = styled.div`
    position: absolute; 
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%; 
    height: 100%; 
    padding: 2rem; 
    background: rgba(255, 255, 255, 0.7); 
    border-radius: 8px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10; 
    @media (max-width: 768px) {
        padding: 5rem; 
    }
`;

const Loader = styled.div`
    border: 8px solid rgba(255, 255, 255, 0.3); 
    border-top: 8px solid var(--Default-Blue);
    border-radius: 50%;
    width: 50px; 
    height: 50px;
    animation: spin 1s linear infinite; 
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

