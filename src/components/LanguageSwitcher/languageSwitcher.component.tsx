import React, {useEffect, useMemo} from "react";

import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slice/settings.slice";

import { useTheme } from "@fluentui/react";
import { getLanguageSwitcherClassNames } from "./languageSwitcher.style";

import { languageData } from "../../utils/language/language";

import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";

export default function LanguageSwitcher() {

    const dispatch = useDispatch();
    const { palette } = useTheme();
    const { langBox, activeLangBox } = getLanguageSwitcherClassNames(palette);
    const { language } = useSelector(state => (state as any).settings);

    const languageList = useMemo(() => languageData, [])

    useEffect(() => {
        console.log(languageList)
    }, [languageList])

    const _changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    }

    const languageBoxes = () => languageList.map(lang => <span
        title={lang.lang}
        key={lang.key}
        onClick={() => _changeLanguage(lang.key)}
        className={classNames({
            [langBox]: true,
            [activeLangBox]: lang.key === language
        })}
    >{lang.shortcut}</span>)

    return (
        <SettingsFieldWrapper title={`Choose language`}>
            {languageBoxes()}
        </SettingsFieldWrapper>
    )
}