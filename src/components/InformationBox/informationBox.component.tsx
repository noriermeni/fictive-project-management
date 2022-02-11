import React from "react";
import {TeachingBubble} from '@fluentui/react/lib/TeachingBubble';
import {DirectionalHint} from '@fluentui/react/lib/Callout';
import {useBoolean, useId} from '@fluentui/react-hooks';
import IconButton from "../IconButton/iconButton.component";
import classNames from "classnames";
import {useTheme} from "@fluentui/react";

interface Props {
    className?: string;
    title: string;
    directionalHint: DirectionalHint;
    children: React.ReactNode;
}

export default function InformationBox({title, directionalHint, className = "", children}: Props) {
    const {palette} = useTheme();
    const buttonId = useId('targetButton');
    const [teachingBubbleVisible, {toggle: toggleTeachingBubbleVisible}] = useBoolean(false);

    return (
        <div>
            <IconButton className={classNames({
                [className]: className
            })}
                        icon={'Info'}
                        onClick={toggleTeachingBubbleVisible}
                        title={title}/>
            {teachingBubbleVisible && (
                <TeachingBubble
                    calloutProps={{directionalHint: directionalHint}}
                    target={`#${buttonId}`}
                    isWide={true}
                    styles={{
                        root: {div: {backgroundColor: palette.themeDark}},
                    }}
                    hasCloseButton={true}
                    closeButtonAriaLabel="Close"
                    onDismiss={toggleTeachingBubbleVisible}
                    headline={title}
                >
                    {children}
                </TeachingBubble>
            )}
        </div>
    )
}