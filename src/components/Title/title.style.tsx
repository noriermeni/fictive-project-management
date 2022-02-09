import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    textStyle: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
}

export const getTitleClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        textStyle: {
            color: palette.neutralPrimaryAlt,
            paddingBottom: 5
        },
        xSmall: {
            fontSize: '12px',
            fontWeight: 400
        },
        small: {
            fontSize: '14px',
            fontWeight: 500
        },
        medium: {
            fontSize: '16px',
            fontWeight: 600
        },
        large: {
            fontSize: '18px',
            fontWeight: 600
        }
    });
};