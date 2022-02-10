import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    container: string;
}

export const getTaskListCardClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column",
        }
    });
};