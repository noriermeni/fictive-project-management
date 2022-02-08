import {ThemeEnum} from "../../enums/ThemeTypes/theme.enum";

import {GreenTheme} from "./types/greenTheme";
import {BlueTheme} from "./types/blueTheme";
import {PurpleTheme} from "./types/purpleTheme";
import {RedTheme} from "./types/redTheme";

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

export const themes = [
    { color: "#aaddaa", type: ThemeEnum.GREEN, id: 1, isActive: true },
    { color: "#0083e8", type: ThemeEnum.BLUE, id: 2, isActive: false },
    { color: "#a558fc", type: ThemeEnum.PURPLE, id: 3, isActive: false },
    { color: "#ff7375", type: ThemeEnum.RED, id: 4, isActive: false },
]