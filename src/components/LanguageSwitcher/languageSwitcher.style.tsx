import {IPalette, mergeStyleSets} from "@fluentui/react";

interface LanguageSwitcherClassNames {
    langBox: string;
    activeLangBox: string;
}

export const getLanguageSwitcherClassNames = (palette: IPalette): LanguageSwitcherClassNames => {
    return mergeStyleSets({
        langBox: {
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            marginRight: 15,
            borderBottom: `2px solid ${palette.white}`,
            cursor: "pointer"
        },
        activeLangBox: {
            borderColor: palette.neutralSecondary
        }
    });
};