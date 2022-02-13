import React from "react";
import CustomPanelCard from "../../CustomPanelCard/customPanelCard.component";
import AttachmentsList from "../../AttachmentsList/attachmentsList.component";
import {AttachmentType} from "../../../types/Attachment/attachment.type";

interface Props {
    show: boolean;
    attachments: Array<AttachmentType>;

    minimizePanel(): void;
}

export default function AttachmentsPanel({show, minimizePanel, attachments}: Props) {
    return (
        <CustomPanelCard minimizePanel={minimizePanel} show={show} title={'Attachments'}>
            <AttachmentsList attachments={attachments}/>
        </CustomPanelCard>
    );
}