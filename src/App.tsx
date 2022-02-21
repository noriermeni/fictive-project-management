import React, {useEffect, useState} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {createTheme, ThemeProvider} from "@fluentui/react";
import {useTranslation} from "react-i18next";
import {BrowserRouter, Outlet} from "react-router-dom";
import store from "./store";
import Routes from "./routes";
import './utils/language/i18n';
import generateTheme from "./utils/theme/generator";
import {clearSelectedUsers} from "./store/slice/project.slice";
import {setCustomColor, setLanguage, setTheme} from "./store/slice/settings.slice";
import {getLocalData} from "./services/localstorage/localstorage";
import Header from "./components/layout/Header/header.component";
import UsersPanel from "./components/Dialogs/UsersPanel/usersPanel.component";

function Main() {
    const {i18n} = useTranslation();
    const dispatch = useDispatch();
    const {theme, language, customColor} = useSelector(state => (state as any).settings);
    const {employeesPanel} = useSelector(state => (state as any).project);

    useEffect(() => {
        getLocalData('theme').then(res => res && dispatch(setTheme(res)));
        getLocalData('language').then(res => res && dispatch(setLanguage(res)));
        getLocalData('color').then(res => res && dispatch(setCustomColor(res)));
    }, [])

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, theme])

    const switchTheme = () => {
        return createTheme({
            palette: {...generateTheme(customColor, '#323130', '#ffffff').palette}
        });
    }

    return (
        <ThemeProvider theme={switchTheme()}>
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