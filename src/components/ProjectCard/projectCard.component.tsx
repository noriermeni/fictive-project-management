import React, {useEffect, useRef, useState} from "react";

import {getProjectCardClassNames} from "./projectCard.style";
import {Facepile, Icon, OverflowButtonType, ProgressIndicator, useTheme} from "@fluentui/react";
import {ProjectType} from "../../types/Project/project.type";
import Title from "../Title/title.component";
import classNames from "classnames";
import {StatusEnum} from "../../enums/Status/status.enum";
import {calculatePercentageOfProgress} from "../../utils/Calculation";

import DateField from "../DateField/dateField.component";
import UsersList from "../UsersList/usersList.component";
import {useDispatch} from "react-redux";
import useComponentVisible from "../../hook/useComponentVisible";

export default function ProjectCard({id, name, description, finish_date, evaluation, employees, status}: ProjectType) {

    const { palette } = useTheme();
    const { container, extend, innerContainer, inProgress, completed, waiting, paused, documentIcon, titleContainer } = getProjectCardClassNames(palette);
    const [ extendBox, setExtendBox ] = useState<boolean>(false);
    const { ref, isComponentVisible } = useComponentVisible(extendBox);

    return (
        <div key={id}
             ref={ref}
             className={classNames({
                [container]: true,
                [extend]: isComponentVisible,
                [inProgress]: status === StatusEnum.IN_PROGRESS,
                [completed]: status === StatusEnum.COMPLETED,
                [waiting]: status === StatusEnum.WAITING,
                [paused]: status === StatusEnum.PAUSED })} >
            <div className={innerContainer}>
                <div className={titleContainer}>
                    <Title size={'md'}
                           text={name} />
                    <Icon onClick={() => setExtendBox(!extendBox)}
                          className={documentIcon}
                          iconName={'DocumentSet'} />
                </div>
                <Title text={description} />
                <ProgressIndicator label={`Tasks progress ${evaluation}%`}
                                   percentComplete={calculatePercentageOfProgress(evaluation)} />
                <div className={titleContainer}>
                    <UsersList label={`Assignees`}
                               employees={employees}
                               maxEmployeesDisplayable={3} />
                    <DateField label={`Due date`}
                               date={finish_date} />
                </div>
            </div>
        </div>
    )
}