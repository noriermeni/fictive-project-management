import {IPalette, mergeStyleSets} from "@fluentui/react";
import {Depths} from "@fluentui/theme";

interface ProjectCardClassNames {
    container: string;
    extend: string;
    innerContainer: string;
    inProgress: string;
    completed: string;
    waiting: string;
    paused: string;
    documentIcon: string;
    titleContainer: string;
}

export const getProjectCardClassNames = (palette: IPalette): ProjectCardClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column",
            boxShadow: Depths.depth8,
            padding: 10,
            margin: 5,
            transition: "width 2s",
            width: 350
        },
        extend: {
            width: "100% !important"
        },
        innerContainer: {
            maxWidth: 350,
        },
        inProgress: {
            borderTop: `4px solid ${palette.greenLight}`,
        },
        completed: {
            borderTop: `4px solid ${palette.blueLight}`,
        },
        waiting: {
            borderTop: `4px solid ${palette.yellowLight}`,
        },
        paused: {
            borderTop: `4px solid ${palette.red}`,
        },
        documentIcon: {
            color: palette.themePrimary,
            cursor: "pointer",
            fontSize: 20
        },
        titleContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    });
};