import React, {useMemo} from "react";

import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setTheme} from "../../store/slice/settings.slice";

import {useTheme} from "@fluentui/react";
import {getThemeSwitcherClassNames} from "./themeSwitcher.style";

import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";

import {themes} from "../../utils/theme/theme";
import {ColorType} from "../../types/Colors/color.type";

export default function ThemeSwitcher() {

    const dispatch = useDispatch();
    const {palette} = useTheme();
    const {activeColor, colorBox} = getThemeSwitcherClassNames(palette);
    const {theme} = useSelector(state => (state as any).settings);
    const colors = useMemo(() => themes, [])

    const _changeTheme = (color: ColorType) => {
        dispatch(setTheme(color.type));
    }

    const colorBoxes = () => colors.map(color => <div
        key={color.color}
        onClick={() => _changeTheme(color)}
        style={{backgroundColor: color.color, border: `2px solid ${color.color}`}}
        className={classNames({
            [colorBox]: true,
            [activeColor]: color.type === theme
        })}
    />)

    return (
        <SettingsFieldWrapper title={`Choose theme`}>
            {colorBoxes()}
        </SettingsFieldWrapper>
    )
}