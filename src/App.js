// import React  from 'react';
import React, { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import Map from './pages/Map';

function App() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <MainLayout>
            <Routes>
              <Route path='/' element={<Map />} />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}


export default App;