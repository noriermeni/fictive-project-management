import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    innerContainer: string;
    icon: string;
    rightSide: string;
    outerContainer: string;
}

export const getHeaderClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        outerContainer: {
            position: "sticky",
            top: 0,
            backgroundColor: palette.white,
            zIndex: 2
        },
        innerContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: 5
        },
        icon: {
            fontSize: 22,
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