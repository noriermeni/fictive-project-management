import React from "react";
import {useParams} from "react-router-dom";
import useData from "../../hook/useData.hook";
import ProjectDetails from "../../components/Templates/ProjectDetails/projectDetails.component";
import DataSpinner from "../../components/DataSpinner/dataSpinner.component";
import {FetchDataType} from "../../types/FetchData/fetchData.type";
import {ProjectType} from "../../types/Project/project.type";

const Project = () => {
    const {id} = useParams();
    const {data, loading}: FetchDataType<ProjectType> = useData(`project/${id}`);

    return (
        <>
            {!loading && data && <ProjectDetails {...data} />}
            {loading && <DataSpinner label={`Waiting for data...`} />}
        </>
    )
}

export default Project;