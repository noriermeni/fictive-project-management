import React from "react";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";
import Wrapper from "../../layout/Wrapper/wrapper.component";
import TaskList from "../../Boards/List/tasksList.component";
import {ProjectType} from "../../../types/Project/project.type";

const ProjectDetails = (props: ProjectType) => {
    const {
        name,
        employees,
        tasks
    } = props;

    return (
        <Wrapper>
            <ProjectHeader title={name} employees={employees} />
            {tasks && <TaskList {...tasks} />}
        </Wrapper>
    )
}

export default ProjectDetails;