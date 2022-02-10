import React from "react";
import {useTheme} from "@fluentui/react";
import {getHomeClassNames} from "./home.style";
import useData from "../../hook/useData.hook";
import ProjectList from "../../components/ProjectList/projectList.component";
import Wrapper from "../../components/layout/Wrapper/wrapper.component";
import DataSpinner from "../../components/DataSpinner/dataSpinner.component";
import {FetchDataType} from "../../types/FetchData/fetchData.type";
import {ProjectType} from "../../types/Project/project.type";

const Home = () => {
    const {data, loading}: FetchDataType<Array<ProjectType>> = useData('projects');
    const {palette} = useTheme();
    const {container} = getHomeClassNames(palette);

    return (
        <Wrapper className={container}>
            {data && !loading && <ProjectList data={data} />}
            {loading && <DataSpinner label={`Waiting for projects data!`}/>}
        </Wrapper>
    )
}

export default Home;