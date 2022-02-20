import React, {useMemo, useState} from "react";
import _ from "lodash";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@fluentui/react";
import {setCustomColor, setTheme} from "../../store/slice/settings.slice";
import {themes} from "../../utils/theme/theme";
import {getThemeSwitcherClassNames} from "./themeSwitcher.style";
import SettingsFieldWrapper from "../SettingsField/settingsFieldWrapper.component";
import {ColorType} from "../../types/Colors/color.type";
import DefaultColorPicker from "../DefaultColorPicker/defaultColorPicker.component";
import {ThemeEnum} from "../../enums/ThemeTypes/theme.enum";

export default function ThemeSwitcher() {

    const dispatch = useDispatch();
    const {palette} = useTheme();
    const {activeColor, colorBox} = getThemeSwitcherClassNames(palette);
    const {theme, customColor} = useSelector(state => (state as any).settings);
    const [enablePicker, setEnablePicker] = useState<boolean>(false);
    const colors: Array<ColorType> = useMemo(() => themes, []);

    const _changeTheme = (color: ColorType) => {
        color.type === ThemeEnum.CUSTOM && setCustomColor(customColor);
        setEnablePicker(color.type === ThemeEnum.CUSTOM);
        dispatch(setTheme(color.type));
    }

    const colorBoxes = () => _.map(colors, (color: ColorType, idx: number) => <div
        key={`${color.color}_${idx}`}
        onClick={() => _changeTheme(color)}
        style={{
            background: color.color,
            border: `2px solid ${color.type === ThemeEnum.CUSTOM ? "#B2FF59" : color.color}`
        }}
        className={classNames({
            [colorBox]: true,
            [activeColor]: color.type === theme
        })}
    />)

    const switchCustomColor = (color: string) => {
        dispatch(setCustomColor(color))
    }

    return (
        <SettingsFieldWrapper title={`Choose theme`}>
            {colorBoxes()}
            {enablePicker && <div>
                <DefaultColorPicker
                    defaultColor={customColor}
                    setGivenColor={(color) => switchCustomColor(color.str)}/>
            </div>}
        </SettingsFieldWrapper>
    )
}