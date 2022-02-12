import {IPalette, mergeStyleSets} from "@fluentui/react";

interface CustomPanelCardClassNames {
    container: string;
    toggleContainer: string;
    header: string;
    titleStyle: string;
    body: string;
    minimizeIcon: string;
}

export const getCustomPanelCardClassNames = (palette: IPalette, show: boolean): CustomPanelCardClassNames => {
    return mergeStyleSets({
        container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            overflow: "hidden",
            bottom: "-100%",
            right: 0,
            width: 0,
            height: 0,
            transition: "all 1s ease",
            opacity: 0,
            maxWidth: 500
        },
        toggleContainer: {
            width: "max-content",
            minWidth: 300,
            height: 400,
            bottom: 0,
            opacity: 1
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: palette.themeDark,
            paddingInline: 10,
            paddingBlock: 5
        },
        titleStyle: {
            color: palette.white,
            paddingBottom: 0
        },
        body: {
            height: "100%",
            backgroundColor: palette.white,
            border: `2px solid ${palette.themeDark}`,
            borderBottom: 0,
            padding: 10,
            overflowY: "auto",
            '&::-webkit-scrollbar': {
                width: '0.4em'
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: `1px solid ${palette.themeDarker}`
            }
        },
        minimizeIcon: {
            fontSize: 15,
            color: palette.white
        }
    });
};