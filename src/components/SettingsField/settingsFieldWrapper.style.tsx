import {IPalette, mergeStyleSets} from "@fluentui/react";

interface HeaderClassNames {
    container: string;
    boxList: string;
}

export const getSettingsFieldWrapperClassNames = (palette: IPalette): HeaderClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexDirection: "column",
            paddingBlock: 10
        },
        boxList: {
            display: "flex",
            flexWrap: "wrap"
        }
    });
};