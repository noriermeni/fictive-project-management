import {focusFirstChild, IPalette, mergeStyleSets} from "@fluentui/react";

interface TaskLineFieldClassNames {
    container: string;
    row: string;
    paddingInline: string;
    iconSettings: string;
    columnSize: string;
}

export const getTaskLineFieldClassNames = (palette: IPalette): TaskLineFieldClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: palette.neutralLighter,
            minHeight: 32,
            margin: 2,
            padding: 4
        },
        row: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            minWidth: "max-content",
            span: {
                paddingBottom: 0,
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
        }
    });
};