import React from "react";
import Title from "../Title/title.component";
import {useTheme} from "@fluentui/react";
import {getSettingsFieldWrapperClassNames} from "./settingsFieldWrapper.style";
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export default function SettingsFieldWrapper({children, title, className = ""}: Props) {
    const {palette} = useTheme();
    let {container, boxList} = getSettingsFieldWrapperClassNames(palette);

    return (
        <div className={classNames({
            [container]: true,
            [className]: className
        })}>
            {title && <Title size={'sm'} text={title}/>}
            <div className={boxList}>
                {children}
            </div>
        </div>
    )
}