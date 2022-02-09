import React from "react";
import classNames from "classnames";
import { Text, useTheme } from "@fluentui/react";
import { getTitleClassNames } from "./title.style";

interface Props {
    text: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function Title({text, size = 'xs'}: Props) {
    const { palette } = useTheme();
    let { textStyle, xSmall, small, medium, large } = getTitleClassNames(palette);
    return (
        <Text className={classNames({
            [textStyle]: true,
            [xSmall]: size === 'xs',
            [small]: size === 'sm',
            [medium]: size === 'md',
            [large]: size === 'lg'
        })}>{text}</Text>
    )
}