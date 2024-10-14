import React from 'react';
import styled from 'styled-components';


const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const MainLayout = ({ children }) => {

    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};

export default MainLayout;