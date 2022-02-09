import React from "react";
import Title from "../Title/title.component";
import {useTheme} from "@fluentui/react";
import {getSettingsFieldWrapperClassNames} from "./settingsFieldWrapper.style";

interface Props {
    children: React.ReactNode;
    title: string;
}

export default function SettingsFieldWrapper({children, title}: Props) {
    const { palette } = useTheme();
    let { container, boxList } = getSettingsFieldWrapperClassNames(palette);

    return (
        <div className={container}>
            <Title size={'sm'} text={title} />
            <div className={boxList}>
                {children}
            </div>
        </div>
    )
}