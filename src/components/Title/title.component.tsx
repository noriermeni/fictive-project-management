import React from "react";
import {Text, useTheme} from "@fluentui/react";
import { getTitleClassNames } from "./title.style";

interface Props {
    text: string;
}

export default function Title({text}: Props) {
    const { palette } = useTheme();
    let {textStyle} = getTitleClassNames(palette);
    return (
        <Text className={textStyle}>{text}</Text>
    )
}