import React from "react";
import {useTheme} from "@fluentui/react";
import {getStatusWrapperClassNames} from "./statusWrapper.style";
import Title from "../Title/title.component";
import classNames from "classnames";
import {StatusEnum} from "../../enums/Status/status.enum";

interface Props {
    children: React.ReactNode;
    name: string;
    status: StatusEnum;
}

export default function StatusWrapper({children, name, status}: Props) {
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
        <div className={container}>
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