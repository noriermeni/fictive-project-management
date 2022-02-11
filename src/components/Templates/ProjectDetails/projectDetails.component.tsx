import React from "react";
import {Outlet} from "react-router-dom";
import Wrapper from "../../layout/Wrapper/wrapper.component";
import TaskList from "../../Boards/List/tasksList.component";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";
import {ProjectType} from "../../../types/Project/project.type";

const ProjectDetails = (props: ProjectType) => {
    const {
        name,
        tasks,
        employees
    } = props;

    return (
        <Wrapper>
            <ProjectHeader title={name} employees={employees} />
            <Outlet />
        </Wrapper>
    )
}

export default ProjectDetails;