import {focusFirstChild, IPalette, mergeStyleSets} from "@fluentui/react";
import {StatusEnum} from "../../enums/Status/status.enum";

interface StatusWrapperClassNames {
    container: string;
    headerStatus: string;
    listContainer: string;
    paused: string;
    waiting: string;
    inProgress: string;
    completed: string;
}

export const getStatusWrapperClassNames = (palette: IPalette): StatusWrapperClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column",
            marginBottom: 20
        },
        headerStatus: {
            display: "flex",
            justifyContent: "center",
            color: palette.tealDark,
            padding: 10,
            maxWidth: "100px",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            span: {
                paddingBottom: 0,
            }
        },
        paused: {
            backgroundColor: palette.red,
            span: {
                color: palette.white
            }
        },
        waiting: {
            backgroundColor: palette.yellowLight,
        },
        completed: {
            backgroundColor: palette.blueLight,
            span: {
                color: palette.white
            }
        },
        inProgress: {
            backgroundColor: palette.greenLight,
        },
        listContainer: {
            border: `2px solid ${palette.neutralLighter}`
        }
    });
};