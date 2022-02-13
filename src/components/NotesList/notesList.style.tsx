import {IPalette, mergeStyleSets} from "@fluentui/react";

interface NotesListClassNames {
    container: string;
    noteCard: string;
    title: string;
}

export const getNotesListClassNames = (palette: IPalette): NotesListClassNames => {
    return mergeStyleSets({
        container: {
            display: "flex",
        },
        noteCard: {
            border: `1px solid`,
            marginBottom: 10,
            div: {
                display: "flex",
                flexDirection: "column",
                padding: 5
            }
        },
        title: {
            color: palette.themeDarker
        }
    });
};