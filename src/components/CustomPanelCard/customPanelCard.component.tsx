import React from "react";
import classNames from "classnames";
import {useTheme} from "@fluentui/react";
import {getCustomPanelCardClassNames} from "./customPanelCard.style";
import useComponentVisibleHook from "../../hook/useComponentVisible.hook";
import Title from "../Title/title.component";
import IconButton from "../IconButton/iconButton.component";

interface Props {
    title: string;
    show: boolean;
    children: React.ReactNode;

    minimizePanel?(): void;
}

export default function CustomPanelCard({show = false, title, children, minimizePanel}: Props) {
    const {palette} = useTheme();
    const {
        container,
        header,
        body,
        toggleContainer,
        titleStyle,
        minimizeIcon
    } = getCustomPanelCardClassNames(palette, show);
    const {ref, isComponentVisible} = useComponentVisibleHook({extendBox: show});

    return (
        <div className={classNames({
            [container]: true,
            [toggleContainer]: isComponentVisible
        })} ref={ref}>
            <div className={header}>
                <Title className={titleStyle} size={'sm'} text={title}/>
                {minimizePanel &&
                <IconButton onClick={minimizePanel} className={minimizeIcon} icon={'ChromeMinimize'}/>}
            </div>
            <div className={body}>
                {children}
            </div>
        </div>
    );
}