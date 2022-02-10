import {IPalette, mergeStyleSets} from "@fluentui/react";

interface TaskLineFieldClassNames {
    container: string;
}

export const getTaskLineFieldClassNames = (palette: IPalette): TaskLineFieldClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "space-between",
            border: `1px solid ${palette.neutralSecondary}`
        }
    });
};