import React, {useEffect, useState} from 'react';

import {BrowserRouter, Outlet} from "react-router-dom";
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
import {clearSelectedUsers} from "./store/slice/project.slice";
import UsersPanel from "./components/Dialogs/UsersPanel/usersPanel.component";

function Main() {
    const {i18n} = useTranslation();
    const dispatch = useDispatch();
    const [updateTheme, setUpdateTheme] = useState<ThemeEnum>(ThemeEnum.GREEN);
    const {theme, language} = useSelector(state => (state as any).settings);
    const {employeesPanel} = useSelector(state => (state as any).project);

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
        setUpdateTheme(theme);
    }, [language, theme])

    return (
        <ThemeProvider theme={findTheme(updateTheme)}>
            <BrowserRouter>
                <Header/>
                <Routes/>
                <Outlet/>
                <UsersPanel
                    isOpen={employeesPanel}
                    dismissPanel={() => dispatch(clearSelectedUsers())}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;