import React from "react";
import NotesList from "../../NotesList/notesList.component";
import CustomPanelCard from "../../CustomPanelCard/customPanelCard.component";
import {NotesType} from "../../../types/Notes/notes.type";

interface Props {
    show: boolean;
    notes: Array<NotesType>;
    minimizePanel(): void;
}

export default function NotesPanel({show, notes, minimizePanel}: Props) {
    return (
        <CustomPanelCard minimizePanel={minimizePanel} show={show} title={'Notes'}>
            <NotesList notes={notes} />
        </CustomPanelCard>
    );
}