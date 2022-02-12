import React from "react";
import {getNotesPanelClassNames} from "./notesPanel.style";
import {
    Sticky,
    StickyPositionType,
    useTheme
} from "@fluentui/react";
import CustomPanelCard from "../../CustomPanelCard/customPanelCard.component";
import {NotesType} from "../../../types/Notes/notes.type";
import Title from "../../Title/title.component";

interface Props {
    show: boolean;
    notes: Array<NotesType>;
    minimizePanel(): void;
}

export default function NotesPanel({show, notes, minimizePanel}: Props) {
    const {palette} = useTheme();
    const {container, noteCard, title} = getNotesPanelClassNames(palette);

    const createContentArea = (note: NotesType, idx: number) => (
        <div key={`${note.id}_${idx}`} className={noteCard}>
            <div>
                <Title size={"sm"} className={title} text={`${++idx}. ${note.title}`} />
                <Title text={note.text} />
            </div>
        </div>
    );

    return (
        <CustomPanelCard minimizePanel={minimizePanel} show={show} title={'Notes'}>
            {notes.length > 0 && notes.map((note: NotesType, idx: number) => createContentArea(note, idx))}
        </CustomPanelCard>
    );
}