import React from "react";
import {getAttachmentsPanelClassNames} from "./attachmentsPanel.style";
import {useTheme} from "@fluentui/react";
import CustomPanelCard from "../../CustomPanelCard/customPanelCard.component";

interface Props {
    show: boolean;
    minimizePanel(): void;
}

export default function AttachmentsPanel({show, minimizePanel}: Props) {
    const {palette} = useTheme();
    const {container} = getAttachmentsPanelClassNames(palette);

    return (
        <CustomPanelCard minimizePanel={minimizePanel} show={show} title={'Attachments'}>
            <p>Attachments</p>
        </CustomPanelCard>
    );
}