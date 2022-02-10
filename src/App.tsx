import React, {useEffect, useState} from 'react';

import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";

import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./store";

import {ThemeProvider} from "@fluentui/react";
import {findTheme} from "./utils/theme/theme";
import {ThemeEnum} from "./enums/ThemeTypes/theme.enum";

import {useTranslation} from "react-i18next";
import './utils/language/i18n';
import {getLocalData} from "./services/localstorage/localstorage";
import {setLanguage, setTheme} from "./store/slice/settings.slice";
import Header from "./components/layout/Header/header.component";

function Main() {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const { theme, language } = useSelector(state => (state as any).settings);
    const [ updateTheme, setUpdateTheme ] = useState<ThemeEnum>(ThemeEnum.GREEN);

    useEffect(() => {
        getLocalData('theme').then(res => {
            dispatch(setTheme(res));
        })
        getLocalData('language').then(res => {
            dispatch(setLanguage(res));
        })
    }, [])

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

    useEffect(() => {
        setUpdateTheme(theme)
    }, [theme])

    return (
        <ThemeProvider theme={findTheme(updateTheme)}>
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

function App() {
  return (
      <Provider store={store}>
          <Main />
      </Provider>
  );
}

export default App;