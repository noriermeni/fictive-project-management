import {IPalette, mergeStyleSets} from "@fluentui/react";

interface ProjectHeaderClassNames {
    container: string;
    projectName: string;
    boardSettings: string;
    iconSettings: string;
}

export const getProjectHeaderClassNames = (palette: IPalette): ProjectHeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "space-between"
        },
        boardSettings: {
            display: "flex",
            alignItems: "center"
        },
        iconSettings: {
            fontSize: 25,
            color: palette.themePrimary,
            marginLeft: 20
        },
        projectName: {

        }
    });
};