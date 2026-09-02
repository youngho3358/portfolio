import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// 참고: 이 프로젝트는 화면 너비(window.innerWidth)에 따라 모바일/데스크톱 레이아웃의
// DOM 구조 자체가 달라진다(Header 등). react-snap이 빌드 시점에 미리 렌더링해둔 화면 크기와
// 실제 방문자의 화면 크기가 다르면 hydrate 시 구조가 어긋나 React 하이드레이션 에러(#418, #423, #425)가
// 발생하므로, hydrateRoot 대신 일반 render를 사용해 마운트 시 항상 새로 그리도록 한다.
// react-snap이 만들어둔 정적 HTML은 검색엔진/생성형 엔진 크롤러가 읽는 용도로는 그대로 유효하다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
