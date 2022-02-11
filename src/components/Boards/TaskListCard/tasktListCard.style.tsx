import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    container: string;
    messageBox: string;
}

export const getTaskListCardClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column",
        },
        messageBox: {
            backgroundColor: palette.neutralLighter,
            margin: 2,
            padding: '10px 4px',
            display: "flex",
            justifyContent: "center",
            span: {
                paddingBottom: 0
            }
        }
    });
};