import React, {useRef} from "react";
import {Outlet} from "react-router-dom";
import {mergeStyleSets, useTheme} from "@fluentui/react";
import {useElementResize} from "../../../hook/useElementResize.hook";
import Wrapper from "../../layout/Wrapper/wrapper.component";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";
import {ProjectType} from "../../../types/Project/project.type";

const ProjectDetails = (props: ProjectType) => {
    const headerContainerRef = useRef<HTMLDivElement>(null);
    const {elementHeight} = useElementResize(headerContainerRef);

    const styles = mergeStyleSets({
        container: {
            paddingBlock: 20,
            marginBottom: `${elementHeight}px`
        },
    });

    return (
        <Wrapper className={styles.container}>
            <Outlet/>
            <ProjectHeader {...props} headerContainerRef={headerContainerRef} headerHeight={elementHeight}/>
        </Wrapper>
    )
}

export default ProjectDetails;