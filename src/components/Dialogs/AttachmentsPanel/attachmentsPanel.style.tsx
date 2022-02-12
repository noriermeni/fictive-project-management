import {IPalette, mergeStyleSets} from "@fluentui/react";

interface AttachmentsPanelClassNames {
    container: string;
    fileItem: string;
}

export const getAttachmentsPanelClassNames = (palette: IPalette): AttachmentsPanelClassNames => {
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