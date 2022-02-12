import {IPalette, mergeStyleSets} from "@fluentui/react";

interface CustomPanelWrapperClassNames {
    container: string;
}

export const getCustomPanelWrapperClassNames = (palette: IPalette): CustomPanelWrapperClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            position: "relative",
            width: "100%"
        }
    });
};