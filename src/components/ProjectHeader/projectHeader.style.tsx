import {IPalette, mergeStyleSets} from "@fluentui/react";

interface ProjectHeaderClassNames {
    container: string;
    innerContainer: string;
    projectInformation: string;
    projectName: string;
    boardSettings: string;
    iconSettings: string;
    marginInline: string;
    informationColor: string;
    collapseIconContainer: string;
    collapseIcon: string;
    rotateCollapseIcon: string;
    collapsedContainer: string;
}

interface Props {
    palette: IPalette;
    headerHeight?: number;
    collapseHeader: boolean;
}

export const getProjectHeaderClassNames = ({palette, headerHeight, collapseHeader}: Props): ProjectHeaderClassNames => {
    return mergeStyleSets({
        container: {
            backgroundColor: palette.themeLight,
            position: "fixed",
            zIndex: 2,
            bottom: 0,
            left: 0,
            right: 0,
            transition: "all 1s linear"
        },
        innerContainer: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: 10,
        },
        projectInformation: {
            marginLeft: 10,
            display: "flex",
            flexDirection: "column"
        },
        boardSettings: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        iconSettings: {
            fontSize: 30,
            cursor: "pointer",
            color: palette.themeDarker
        },
        marginInline: {
            marginLeft: 15,
        },
        projectName: {
            paddingBottom: 0,
            marginRight: 10
        },
        informationColor: {
            color: palette.white,
            span: {
                color: palette.white
            }
        },
        collapseIconContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 10,
            top: collapseHeader ? -40 : -25,
            borderRadius: "50%",
            width: 25,
            height: 25,
            backgroundColor: palette.themeDarker,
        },
        collapseIcon: {
            fontSize: 15,
            color: palette.white,
            transition: "all 1s"
        },
        rotateCollapseIcon: {
            transform: "rotate(180deg)"
        },
        collapsedContainer: {
            bottom: `calc(-${headerHeight}px + 10px)`
        }
    });
};