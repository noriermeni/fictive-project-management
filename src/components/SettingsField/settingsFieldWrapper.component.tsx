import React from "react";
import Title from "../Title/title.component";
import {useTheme} from "@fluentui/react";
import {getSettingsFieldWrapperClassNames} from "./settingsFieldWrapper.style";
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
    title?: string;
    className?: string;
    boxListClassName?: string
}

export default function SettingsFieldWrapper({children, title, className = "", boxListClassName = ""}: Props) {
    const {palette} = useTheme();
    let {container, boxList} = getSettingsFieldWrapperClassNames(palette);

    return (
        <div className={classNames({
            [container]: true,
            [className]: className
        })}>
            {title && <Title size={'sm'} text={title}/>}
            <div className={classNames(({
                [boxList]: true,
                [boxListClassName]: boxListClassName
            }))}>
                {children}
            </div>
        </div>
    )
}