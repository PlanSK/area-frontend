import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  faCalendarCheck, faUsers, faGraduationCap, faChartLine, faCalendarDays, faChartColumn,
  faPaperPlane, faCircleUser, faScrewdriverWrench, faEnvelopeCircleCheck, faSun,
  faNetworkWired, faUser, faArrowRightFromBracket, faRubleSign, faSackXmark, faCoins, faBook } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faCalendarCheck, faUsers, faGraduationCap, faChartLine, faCalendarDays,
  faChartColumn, faPaperPlane, faCircleUser, faScrewdriverWrench, faEnvelopeCircleCheck,
  faSun, faNetworkWired, faUser, faArrowRightFromBracket, faRubleSign, faSackXmark,
  faCoins, faBook,  
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
