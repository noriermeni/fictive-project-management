import React from "react";
import {useTheme} from "@fluentui/react";
import {getNotesListClassNames} from "./notesList.style";
import Title from "../Title/title.component";
import {NotesType} from "../../types/Notes/notes.type";

interface Props {
    notes: Array<NotesType>;
}

export default function NotesList({notes}: Props) {
    const {palette} = useTheme();
    const {noteCard, title} = getNotesListClassNames(palette);

    const createContentArea = (note: NotesType, idx: number) => (
        <div key={`${note.id}_${idx}`} className={noteCard}>
            <div>
                <Title size={"sm"} className={title} text={`${++idx}. ${note.title}`} />
                <Title text={note.text} />
            </div>
        </div>
    );

    return (
        <div>
            {notes && notes.length > 0 && notes.map((note: NotesType, idx: number) => createContentArea(note, idx))}
            {!notes && <Title text={`There are no notes to show!`} />}
        </div>
    );
}