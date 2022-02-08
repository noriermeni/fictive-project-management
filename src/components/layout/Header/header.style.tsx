import {IPalette, mergeStyleSets} from "@fluentui/react";
import {Depths} from '@fluentui/theme';

interface HeaderClassNames {
    container: string;
    innerContainer: string;
    icon: string;
    rightSide: string;
}

export const getHeaderClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            width: "100%",
            boxShadow: Depths.depth8
        },
        innerContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: 5
        },
        icon: {
            fontSize: 25,
            cursor: "pointer",
            color: palette.themePrimary,
            marginRight: 15
        },
        rightSide: {
            display: "flex",
            alignItems: "center"
        }
    })
};