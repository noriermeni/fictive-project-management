import { IPalette, mergeStyleSets } from "@fluentui/react";

interface ProjectListClassNames {
    container: string;
}

export const getProjectListClassNames = (palette: IPalette): ProjectListClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexWrap: "wrap",
            width: "100%"
        },
    });
};