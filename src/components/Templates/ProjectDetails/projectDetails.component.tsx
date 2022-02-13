import React, {useRef, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {mergeStyleSets, useTheme} from "@fluentui/react";
import {useElementResize} from "../../../hook/useElementResize.hook";
import Wrapper from "../../layout/Wrapper/wrapper.component";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";
import {ProjectType} from "../../../types/Project/project.type";
import Title from "../../Title/title.component";
import IconButton from "../../IconButton/iconButton.component";

const ProjectDetails = (project: ProjectType) => {
    const {palette} = useTheme();
    const navigate = useNavigate();
    const [collapseHeader, setCollapseHeader] = useState<boolean>(false);
    const headerContainerRef = useRef<HTMLDivElement>(null);
    const {elementHeight} = useElementResize(headerContainerRef);

    const styles = mergeStyleSets({
        container: {
            paddingBlock: 20,
            marginBottom: collapseHeader ? 0 : `${elementHeight}px`,
            overflowX: "auto",
            '&::-webkit-scrollbar': {
                height: '0.1px'
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: `1px solid ${palette.themeDarker}`
            }
        },
        projectHeader: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: 20,
            div: {
                display: "flex",
                alignItems: "center",
                marginTop: 25,
                cursor: "pointer",
                zIndex: 3
            }
        },
        goBackLabel: {
            marginLeft: 10
        }
    });

    return (
        <>
            <Wrapper className={styles.projectHeader}>
                <div onClick={() => navigate('/')}>
                    <IconButton title={"Navigate back to the Go back to the list of projects!"} icon={'NavigateBack'}/>
                    <Title className={styles.goBackLabel} size={"sm"} text={'Go to the list of pojects!'}/>
                </div>
            </Wrapper>
            <Wrapper className={styles.container}>

                <Outlet/>
                <ProjectHeader {...project}
                               handleCollapsedHeader={(value: boolean) => setCollapseHeader(value)}
                               headerContainerRef={headerContainerRef} headerHeight={elementHeight}/>
            </Wrapper>
        </>
    )
}

export default ProjectDetails;