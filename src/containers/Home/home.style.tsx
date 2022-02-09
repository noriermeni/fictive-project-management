import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HomeClassNames {
    container: string;
}

export const getHomeClassNames = (palette: IPalette): HomeClassNames => {
    return mergeStyleSets({
        container: {
            marginBlock: 20,
        },
    });
};