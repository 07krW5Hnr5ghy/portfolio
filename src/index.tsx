import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';
import {BrowserRouter} from "react-router-dom";

/* lenguage config imports */
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

/* lenguage support config */
i18next
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
    supportedLngs:["en","sp"],
    fallbackLng:"en",
    detection:{
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches:['cookie']
    },
    backend:{
        loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react:{
        useSuspense: false,
    }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App/>
    </React.StrictMode> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
