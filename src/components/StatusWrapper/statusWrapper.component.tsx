import React from "react";
import {useTheme} from "@fluentui/react";
import {getStatusWrapperClassNames} from "./statusWrapper.style";
import Title from "../Title/title.component";
import classNames from "classnames";
import {StatusEnum} from "../../enums/Status/status.enum";

interface Props {
    name: string;
    className?: string;
    status: StatusEnum;
    children: React.ReactNode;
}

export default function StatusWrapper({children, name, status, className = ""}: Props) {
    const {palette} = useTheme();

    const {
        container,
        headerStatus,
        listContainer,
        paused,
        inProgress,
        waiting,
        completed
    } = getStatusWrapperClassNames(palette);

    return (
        <div className={classNames(({
            [container]: true,
            [className]: className
        }))}>
            <div className={classNames({
                [headerStatus]: true,
                [paused]: status === StatusEnum.PAUSED,
                [waiting]: status === StatusEnum.WAITING,
                [inProgress]: status === StatusEnum.IN_PROGRESS,
                [completed]: status === StatusEnum.COMPLETED
            })}>
                <Title size={"sm"} text={name}/>
            </div>
            <div className={listContainer}>
                {children}
            </div>
        </div>
    )
}