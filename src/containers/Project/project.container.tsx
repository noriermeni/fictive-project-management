import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {mergeStyleSets} from "@fluentui/react";
import useData from "../../hook/useData.hook";
import {setSelectedProjectTasks} from "../../store/slice/project.slice";
import ProjectDetails from "../../components/Templates/ProjectDetails/projectDetails.component";
import DataSpinner from "../../components/DataSpinner/dataSpinner.component";
import {FetchDataType} from "../../types/FetchData/fetchData.type";
import {ProjectType} from "../../types/Project/project.type";

const Project = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [project, setProject] = useState<ProjectType>();
    const {data, loading}: FetchDataType<ProjectType> = useData(`project/${id}`);

    const styles = mergeStyleSets({
        container: {
            display: "flex",
            justifyContent: "center",
            width: "100%"
        },
    });

    useEffect(() => {
        data && setProject(data);
    }, [data])

    useEffect(() => {
        project?.tasks && dispatch(setSelectedProjectTasks({
            tasks: project?.tasks,
            children: project?.childrenProjects
        }));
    }, [dispatch, project])

    return (
        <>
            {!loading && data && <ProjectDetails {...data} />}
            {loading && <div className={styles.container}>
                <DataSpinner label={`Waiting for data...`}/>
            </div>}
        </>
    )
}

export default Project;