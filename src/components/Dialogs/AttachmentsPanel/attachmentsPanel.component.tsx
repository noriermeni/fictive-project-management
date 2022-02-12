import React from "react";
import {useTheme} from "@fluentui/react";
import {FileIcon, defaultStyles} from 'react-file-icon';
import {getLastKeyFromPathname} from "../../../utils/splitPathname";
import {getAttachmentsPanelClassNames} from "./attachmentsPanel.style";
import CustomPanelCard from "../../CustomPanelCard/customPanelCard.component";
import {AttachmentType} from "../../../types/Attachment/attachment.type";
import Title from "../../Title/title.component";
import {downloadFile} from "../../../utils/downloadFile";

interface Props {
    show: boolean;
    attachments: Array<AttachmentType>;

    minimizePanel(): void;
}

export default function AttachmentsPanel({show, minimizePanel, attachments}: Props) {
    const {palette} = useTheme();
    const {container, fileItem} = getAttachmentsPanelClassNames(palette);

    return (
        <CustomPanelCard minimizePanel={minimizePanel} show={show} title={'Attachments'}>
            <div className={container}>
                {attachments && attachments.length > 0 && attachments.map((attach: AttachmentType, idx: number) => <div
                    key={`${attach.id}_${idx}`}
                    onClick={() => downloadFile(attach.url)}
                    className={fileItem}>
                    {/*@ts-ignore*/}
                    <FileIcon extension="docx" {...defaultStyles[attach.type]} />
                    <Title text={getLastKeyFromPathname(attach.url)} />
                </div>)}
            </div>
        </CustomPanelCard>
    );
}