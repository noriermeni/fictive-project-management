import React, {useMemo} from "react";
import _ from "lodash";
import classNames from "classnames";
import { useTheme } from "@fluentui/react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/slice/settings.slice";
import { languageData } from "../../utils/language/language";
import { getLanguageSwitcherClassNames } from "./languageSwitcher.style";
import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";
import {LanguageType} from "../../types/Language/language.type";

export default function LanguageSwitcher() {

    const dispatch = useDispatch();
    const { palette } = useTheme();
    const { langBox, activeLangBox } = getLanguageSwitcherClassNames(palette);
    const { language } = useSelector(state => (state as any).settings);

    const languageList: Array<LanguageType> = useMemo(() => languageData, [])

    const _changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang));
    }

    const languageBoxes = () => _.map(languageList, (lang: LanguageType, idx: number) => <span
        title={lang.lang}
        key={`${lang.key}_${idx}`}
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