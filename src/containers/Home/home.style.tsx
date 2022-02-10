import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HomeClassNames {
    container: string;
}

export const getHomeClassNames = (palette: IPalette): HomeClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "center",
            marginBlock: 20
        },
    });
};