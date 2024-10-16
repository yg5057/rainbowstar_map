import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Map />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
