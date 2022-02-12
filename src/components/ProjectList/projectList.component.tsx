import React from "react";
import _ from "lodash";
import {useTheme} from "@fluentui/react";
import {getProjectListClassNames} from "./projectList.style";
import ProjectCard from "../ProjectCard/projectCard.component";
import {ProjectType} from "../../types/Project/project.type";

interface Props {
    data: Array<ProjectType>;
}

export default function ProjectList({data}: Props) {
    const {palette} = useTheme();
    const {container} = getProjectListClassNames(palette);

    const mappingProjects = () => _.map(data, (project: ProjectType, idx: number) => <React.Fragment key={`${project.id}_${idx}`}>
        <ProjectCard {...project} />
    </React.Fragment>)

    return (
        <div className={container}>
            {data && mappingProjects()}
        </div>
    )
}