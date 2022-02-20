import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    container: string;
    colorBox: string;
    colorBoxList: string;
    activeColor: string;
    defaultColorPickerWrapper: string;
    collapsedColorPickerWrapper: string;
}

export const getThemeSwitcherClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column"
        },
        colorBoxList: {},
        colorBox: {
            width: 30,
            height: 30,
            marginRight: 10,
            cursor: "pointer",
            border: `2px solid ${palette.white}`
        },
        activeColor: {
            borderColor: `${palette.neutralSecondary} !important`,
        },
        defaultColorPickerWrapper: {
            overflow: "hidden",
            height: 0,
            transition: "all 1s ease-in-out"
        },
        collapsedColorPickerWrapper: {
            height: "370px !important",
        }
    });
};