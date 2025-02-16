// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('./pages/Main')); // 동적 로딩
const Detail = lazy(() => import('./pages/Detail')); // 동적 로딩

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

