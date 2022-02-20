import React from "react";
import {useTheme} from "@fluentui/react";
    import {defaultStyles, FileIcon} from "react-file-icon";
import {getAttachmentsListClassNames} from "./attachmentsList.style";
import {getLastKeyFromPathname} from "../../utils/splitPathname";
import {downloadFile} from "../../utils/downloadFile";
import Title from "../Title/title.component";
import {AttachmentType} from "../../types/Attachment/attachment.type";

interface Props {
    attachments: Array<AttachmentType>;
}

export default function AttachmentsList({attachments}: Props) {
    const {palette} = useTheme();
    const {container, fileItem} = getAttachmentsListClassNames(palette);

    return (
        <div className={container}>
            {attachments && attachments.length > 0 && attachments.map((attach: AttachmentType, idx: number) => <div
                key={`${attach.id}_${idx}`}
                onClick={() => downloadFile(attach.url)}
                className={fileItem}>
                {/*@ts-ignore*/}
                <FileIcon extension="docx" {...defaultStyles[attach.type]} />
                <Title text={getLastKeyFromPathname(attach.url)}/>
            </div>)}
            {!attachments && <Title text={'There are no attachments to show!'}/>}
        </div>
    )
}