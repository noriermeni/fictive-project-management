import {IPalette, mergeStyleSets} from "@fluentui/react";

interface AttachmentsPanelClassNames {
    container: string;
}

export const getAttachmentsPanelClassNames = (palette: IPalette): AttachmentsPanelClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
        }
    });
};