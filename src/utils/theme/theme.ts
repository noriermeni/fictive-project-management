import {ThemeEnum} from "../../enums/ThemeTypes/theme.enum";

import {GreenTheme} from "./types/greenTheme";
import {BlueTheme} from "./types/blueTheme";
import {PurpleTheme} from "./types/purpleTheme";
import {RedTheme} from "./types/redTheme";
import {ColorType} from "../../types/Colors/color.type";

export const findTheme = (theme: ThemeEnum) => {
    switch (theme) {
        case ThemeEnum.BLUE:
            return BlueTheme;
        case ThemeEnum.GREEN:
            return GreenTheme;
        case ThemeEnum.PURPLE:
            return PurpleTheme;
        case ThemeEnum.RED:
            return RedTheme;
        default:
            return GreenTheme;
    }
}

export const themes: Array<ColorType> = [
    {color: "#aaddaa", type: ThemeEnum.GREEN, id: 1, isActive: true},
    {color: "#0083e8", type: ThemeEnum.BLUE, id: 2, isActive: false},
    {color: "#a558fc", type: ThemeEnum.PURPLE, id: 3, isActive: false},
    {color: "#ff7375", type: ThemeEnum.RED, id: 4, isActive: false},
    {
        color: "linear-gradient(90deg, #F44336 0%, #D40035 0%, #00A9D4 48%, #9DEE82 100%)",
        type: ThemeEnum.CUSTOM,
        id: 4,
        isActive: false
    },
]