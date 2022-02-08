import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    container: string;
    colorBox: string;
    colorBoxList: string;
    activeColor: string;
}

export const getThemeSwitcherClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column"
        },
        colorBoxList: {

        },
        colorBox: {
            width: 30,
            height: 30,
            marginRight: 10,
            cursor: "pointer",
            border: `2px solid ${palette.white}`
        },
        activeColor: {
            borderColor: `${palette.neutralSecondary} !important`,
        }
    });
};