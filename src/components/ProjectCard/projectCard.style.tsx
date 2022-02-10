import { IPalette, mergeStyleSets } from "@fluentui/react";
import { Depths } from "@fluentui/theme";

interface ProjectCardClassNames {
    container: string;
    extend: string;
    innerContainer: string;
    innerContainerExtend: string;
    customBorder: string;
    descriptionContainer: string;
    inProgress: string;
    completed: string;
    waiting: string;
    paused: string;
    documentIcon: string;
    titleContainer: string;
    extendTitleContainer: string;
    childrenContainer: string;
    minimizeWrapper: string;
    minimizeIcon: string;
    paddingInline: string;
}

export const getProjectCardClassNames = (palette: IPalette, isChildren: boolean): ProjectCardClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            position: "relative",
            boxShadow: !isChildren && Depths.depth8,
            paddingBlock: 10,
            padding: !isChildren && 10,
            margin: !isChildren && 5,
            transition: "all 1s",
            width: isChildren ? `100%` : 350,
            flexDirection: isChildren ? "column" : "row"
        },
        customBorder: {
            borderBottom: `0.5px solid ${palette.neutralTertiary}`,
            paddingBottom: 10
        },
        extend: {
            width: "100% !important",
            display: "flex",
            flexDirection: "column",
        },
        innerContainer: {
            maxWidth: isChildren ? `100%` : 350,
        },
        innerContainerExtend: {
            maxWidth: '100%',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        descriptionContainer: {
            maxWidth: 300,
            '@media(max-width: 991px)': {
                maxWidth: 180,
            }
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
            alignItems: "center",
            a: {
                textDecorationColor: palette.themePrimary
            }
        },
        extendTitleContainer: {
            flex: 1,
            maxWidth: 200,
            '@media(max-width: 991px)': {
                maxWidth: 150,
            }
        },
        childrenContainer: {
            flex: 1,
        },
        minimizeWrapper: {
            display: "flex",
            justifyContent: "space-between"
        },
        minimizeIcon: {
            padding: 10,
            cursor: "pointer",
            color: palette.themePrimary
        },
        paddingInline: {
            paddingInline: 10
        }
    });
};