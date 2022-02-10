import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import classNames from "classnames";
import {getProjectCardClassNames} from "./projectCard.style";
import {Icon, ProgressIndicator, useTheme} from "@fluentui/react";
import useComponentVisible from "../../hook/useComponentVisible";
import {calculatePercentageOfProgress} from "../../utils/calculation";
import DateField from "../DateField/dateField.component";
import UsersList from "../UsersList/usersList.component";
import Title from "../Title/title.component";
import {StatusEnum} from "../../enums/Status/status.enum";
import {ProjectType} from "../../types/Project/project.type";

export default function ProjectCard(props: ProjectType) {

    const {
        id,
        name,
        description,
        finish_date,
        evaluation,
        employees,
        status,
        childrenProjects,
        isChildren = false
    } = props;

    const {palette} = useTheme();
    const {
        container,
        extend,
        innerContainer,
        innerContainerExtend,
        customBorder,
        descriptionContainer,
        inProgress,
        completed,
        waiting,
        paused,
        documentIcon,
        titleContainer,
        extendTitleContainer,
        childrenContainer,
        minimizeWrapper,
        minimizeIcon,
        paddingInline
    } = getProjectCardClassNames(palette, isChildren);
    const [extendBox, setExtendBox] = useState<boolean>(false);
    const {employeesPanel} = useSelector(state => (state as any).project);
    const {ref, isComponentVisible} = useComponentVisible({extendBox, employeesPanel});

    const isChildrenOrExtend = () => isComponentVisible || isChildren;

    const recursiveProjectCard = (childrenProjects: Array<ProjectType>) => {
        return (
            childrenProjects && childrenProjects.map((project: ProjectType, idx: number) => {
                return (
                    <div key={`${project.id}_${idx}`}>
                        <ProjectCard {...project} isChildren/>
                        {project.childrenProjects && recursiveProjectCard(project.childrenProjects)}
                    </div>
                );
            })
        )
    }

    const recursiveWrapper = () => {
        return (
            isComponentVisible && <div className={childrenContainer}>
                {recursiveProjectCard(childrenProjects)}
            </div>
        )
    }

    const headerOfProjectCard = () => {
        return (
            <div className={classNames({
                [titleContainer]: true,
                [extendTitleContainer]: isChildrenOrExtend()
            })}>
                <Link to={`project/${id}`}>
                    <Title size={'md'} text={name}/>
                </Link>
                {childrenProjects.length > 0 &&
                !isComponentVisible && <Icon onClick={() => setExtendBox(!extendBox)}
                                             className={documentIcon}
                                             iconName={'ExternalTFVC'}/>}
                {childrenProjects.length > 0 &&
                isComponentVisible && <Icon onClick={() => setExtendBox(!extendBox)}
                                            className={documentIcon}
                                            iconName={'ChevronUpSmall'}
                />}
            </div>
        )
    }

    return (
        <div ref={ref}
             className={classNames({
                 [container]: true,
                 [extend]: (isComponentVisible && childrenProjects.length > 0) || isChildren,
                 [inProgress]: status === StatusEnum.IN_PROGRESS && !isChildren,
                 [completed]: status === StatusEnum.COMPLETED && !isChildren,
                 [waiting]: status === StatusEnum.WAITING && !isChildren,
                 [paused]: status === StatusEnum.PAUSED && !isChildren
             })}>
            {isComponentVisible && !isChildren && <div className={minimizeWrapper}>
                <Title size={'lg'}
                       text={"ON GOING"}/>
                <Icon onClick={() => setExtendBox(!extendBox)}
                      className={minimizeIcon}
                      iconName={'ChromeMinimize'}/>
            </div>}
            <div className={classNames({
                [innerContainer]: !isComponentVisible,
                [innerContainerExtend]: isChildrenOrExtend(),
                [customBorder]: !isChildren && isComponentVisible
            })}>
                {headerOfProjectCard()}
                <div className={classNames({
                    [descriptionContainer]: isChildrenOrExtend()
                })}>
                    <Title text={description}/>
                </div>
                <ProgressIndicator label={`Tasks progress ${evaluation}%`}
                                   percentComplete={calculatePercentageOfProgress(evaluation)}/>
                <div className={titleContainer}>
                    <div className={classNames({
                        [paddingInline]: isChildrenOrExtend()
                    })}>
                        <UsersList label={`Assignees`}
                                   employees={employees}
                                   maxEmployeesDisplayable={isChildrenOrExtend() ? 2 : 3}/>
                    </div>
                    <div className={classNames({
                        [paddingInline]: isChildrenOrExtend()
                    })}>
                        <DateField label={`Due date`}
                                   date={finish_date}/>
                    </div>
                </div>
            </div>
            {recursiveWrapper()}
        </div>
    )
}