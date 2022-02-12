import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import useData from "../../hook/useData.hook";
import {setSelectedProjectTasks} from "../../store/slice/project.slice";
import ProjectDetails from "../../components/Templates/ProjectDetails/projectDetails.component";
import DataSpinner from "../../components/DataSpinner/dataSpinner.component";
import {FetchDataType} from "../../types/FetchData/fetchData.type";
import {ProjectType} from "../../types/Project/project.type";

const Project = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {data, loading}: FetchDataType<ProjectType> = useData(`project/${id}`);

    useEffect(() => {
        //@ts-ignore
        data?.tasks && dispatch(setSelectedProjectTasks({tasks: data?.tasks, children: data?.childrenProjects
    }));
    }, [loading])

    return (
        <>
            {!loading && data && <ProjectDetails {...data} />}
            {loading && <DataSpinner label={`Waiting for data...`} />}
        </>
    )
}

export default Project;