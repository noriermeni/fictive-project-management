import React from "react";
import classNames from "classnames";
import {Text, useTheme} from "@fluentui/react";
import {getTitleClassNames} from "./title.style";

interface Props {
    text: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export default function Title({text, size = 'xs', className = ""}: Props) {
    const {palette} = useTheme();
    const {textStyle, xSmall, small, medium, large, xLarge} = getTitleClassNames(palette);

    return (
        <Text className={classNames({
            [textStyle]: true,
            [xSmall]: size === 'xs',
            [small]: size === 'sm',
            [medium]: size === 'md',
            [large]: size === 'lg',
            [xLarge]: size === 'xl',
            [className]: className
        })}>{text}</Text>
    )
}