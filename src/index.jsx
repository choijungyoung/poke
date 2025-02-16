// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18에서 사용되는 방식
import './index.css';  // Tailwind CSS가 적용된 파일
import App from './App';  // App 컴포넌트 임포트

const root = ReactDOM.createRoot(document.getElementById('root'));  // root div 찾기
root.render(
  <React.StrictMode>
    <App />  {/* App 컴포넌트 렌더링 */}
  </React.StrictMode>
);
