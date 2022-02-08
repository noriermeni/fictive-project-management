import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    textStyle: string;
}

export const getTitleClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        textStyle: {
            fontSize: '14px',
            fontWeight: 500,
            color: palette.neutralPrimaryAlt,
            paddingBlock: 5,
        },
    });
};