import {IPalette, mergeStyleSets} from "@fluentui/react";

interface TaskLineFieldClassNames {
    container: string;
    containerColumn: string;
    row: string;
    paddingInline: string;
    iconSettings: string;
    columnSize: string;
    customUserItemContainer: string;
    titleWrap: string;
}

export const getTaskLineFieldClassNames = (palette: IPalette): TaskLineFieldClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: palette.neutralLighter,
            minHeight: 32,
            margin: 2,
            padding: 4,
            '@media(max-width: 885px)': {
                flexDirection: "column",
                maxWidth: "100%",
            }
        },
        containerColumn: {
            flexDirection: "column",
        },
        row: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "max-content",
            span: {
                paddingBottom: 0,
            },
            '@media(max-width: 885px)': {
                width: "100%",
                justifyContent: "space-around",
                marginBottom: 10
            }
        },
        paddingInline: {
            paddingInline: 10
        },
        iconSettings: {
            color: palette.themePrimary,
            fontSize: 20
        },
        columnSize: {
            minWidth: 32,
            minHeight: 42
        },
        customUserItemContainer: {
            paddingBlock: 0
        },
        titleWrap: {
            maxWidth: 250
        }
    });
};