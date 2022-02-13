import {IPalette, mergeStyleSets} from "@fluentui/react";

interface AttachmentsListClassNames {
    container: string;
    fileItem: string;
}

export const getAttachmentsListClassNames = (palette: IPalette): AttachmentsListClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
            flexWrap: "wrap"
        },
        fileItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: 15,
            cursor: "pointer",
            svg: {
                width: 50
            }
        }
    });
};