import {IPalette, mergeStyleSets} from "@fluentui/react";

interface ProjectHeaderClassNames {
    container: string;
    projectName: string;
    boardSettings: string;
    iconSettings: string;
    marginInline: string;
}

export const getProjectHeaderClassNames = (palette: IPalette): ProjectHeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: 10
        },
        boardSettings: {
            display: "flex",
            alignItems: "center",
        },
        iconSettings: {
            fontSize: 30,
            cursor: "pointer",
            color: palette.themePrimary
        },
        marginInline: {
            marginLeft: 15,
        },
        projectName: {
            paddingBottom: 0,
            marginRight: 10
        }
    });
};