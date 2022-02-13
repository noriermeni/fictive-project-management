import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HoverCardWrapperClassNames {
    header: string;
    body: string;
    iconDown: string;
}

export const getHoverCardWrapperClassNames = (palette: IPalette): HoverCardWrapperClassNames => {
    return mergeStyleSets({
        header: {
            height: 50,
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: palette.themeLight,
            span: {
                marginRight: 10
            }
        },
        iconDown: {
            fontSize: 13,
            color: palette.themeDarker
        },
        body: {
            padding: "10px 20px",
        }
    })
}