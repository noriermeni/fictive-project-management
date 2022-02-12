import React, {useState} from "react";
import {useTheme} from "@fluentui/react";
import {getCustomPanelWrapperClassNames} from "./customPanelWrapper.style";
import AttachmentsPanel from "../Dialogs/AttachmentsPanel/attachmentsPanel.component";
import NotesPanel from "../Dialogs/NotesPanel/notesPanel.component";
import {NotesType} from "../../types/Notes/notes.type";
import {AttachmentType} from "../../types/Attachment/attachment.type";

interface Props {
    showNotesPanel: boolean;
    showAttachmentsPanel: boolean;
    notes: Array<NotesType>;
    attachments: Array<AttachmentType>;
    minimizeNotesPanel(): void;
}

export default function CustomPanelWrapper({showAttachmentsPanel, showNotesPanel, notes, attachments, minimizeNotesPanel}: Props) {
    const {palette} = useTheme();
    const {container} = getCustomPanelWrapperClassNames(palette);

    return (
        <div className={container}>
            <AttachmentsPanel minimizePanel={minimizeNotesPanel} show={showAttachmentsPanel}/>
            <NotesPanel minimizePanel={minimizeNotesPanel} notes={notes} show={showNotesPanel}/>
        </div>
    );
}