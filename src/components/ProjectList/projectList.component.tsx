import React from "react";

import { useTheme } from "@fluentui/react";
import { getProjectListClassNames } from "./projectList.style";

import { useDispatch, useSelector } from "react-redux";
import { clearSelectedUsers } from "../../store/slice/project.slice";

import ProjectCard from "../ProjectCard/projectCard.component";
import UsersPanel from "../Dialogs/UsersPanel/usersPanel.component";

import { ProjectType} from "../../types/Project/project.type";

interface Props {
    data: Array<ProjectType>;
}

export default function ProjectList({data}: Props) {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    let { container } = getProjectListClassNames(palette);
    const { employeesPanel } = useSelector(state => (state as any).project);

    const mappingProjects = () => data.map((project: ProjectType) => <ProjectCard {...project} />)

    return (
        <div className={container}>
            {data && mappingProjects()}
            <UsersPanel
                isOpen={employeesPanel}
                dismissPanel={() => dispatch(clearSelectedUsers())} />
        </div>
    )
}