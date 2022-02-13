import React from "react";
import {DirectionalHint, ExpandingCardMode, HoverCard, IExpandingCardProps, useTheme} from "@fluentui/react";
import IconButton from "../IconButton/iconButton.component";
import Title from "../Title/title.component";
import {getHoverCardWrapperClassNames} from "./hoverCardWrapper.style";

interface Props {
    icon: string;
    className?: string;
    title: string;
    children: React.ReactNode;
}

export default function HoverCardWrapper({className, icon, title, children}: Props) {

    const {palette} = useTheme();
    const {header, iconDown, body} = getHoverCardWrapperClassNames(palette)

    const renderCompactCard = () => {
        return (
            <div className={header}>
                <Title size={"sm"} text={title}/>
                <IconButton className={iconDown} icon={'CaretDownSolid8'} />
            </div>
        )
    }

    const renderExpandedCard = () => {
        return (
            <div className={body}>
                {children}
            </div>
        )
    }

    const expandingCardProps: IExpandingCardProps = {
        onRenderCompactCard: renderCompactCard,
        onRenderExpandedCard: renderExpandedCard,
        directionalHint: DirectionalHint.leftCenter,
        gapSpace: 3,
        compactCardHeight: 50,
        mode: ExpandingCardMode.expanded
    };

    return (
        <div>
            <HoverCard
                trapFocus
                expandingCardProps={expandingCardProps}
                instantOpenOnClick={true}
                cardDismissDelay={300}
            >
                <IconButton className={className} icon={icon}/>
            </HoverCard>
        </div>
    )
}