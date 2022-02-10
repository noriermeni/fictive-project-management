import React from "react";

import { useTheme } from "@fluentui/react";
import { getDateFieldClassNames } from "./dateField.style";

import Title from "../Title/title.component";

import { formatDate } from "../../utils/DateFormats/dateFormats";

interface Props {
    label: string;
    date: Date;
}

export default function DateField({label, date}: Props) {
    const { palette } = useTheme();
    const { container } = getDateFieldClassNames(palette)

    return (
        <div className={container}>
            <Title text={`${label}:`} />
            <Title size={'sm'} text={`${formatDate(date)}`} />
        </div>
    );
}