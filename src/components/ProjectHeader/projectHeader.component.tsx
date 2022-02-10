import React from "react";
import {Icon, useTheme} from "@fluentui/react";
import {getProjectHeaderClassNames} from "./projectHeader.style";
import Title from "../Title/title.component";
import UsersList from "../UsersList/usersList.component";
import Box from "../layout/Box/box.component";
import {UserType} from "../../types/User/user.type";

interface Props {
    title: string;
    employees: Array<UserType>;
}

const ProjectHeader = (props: Props) => {
    const {title, employees} = props;
    const {palette} = useTheme();
    const {container, projectName, boardSettings, iconSettings} = getProjectHeaderClassNames(palette);

    return (
        <Box className={container}>
            <Title className={projectName} size={'lg'} text={title}/>
            <div className={boardSettings}>
                <UsersList label={`Assignees`}
                           employees={employees}
                           maxEmployeesDisplayable={3}/>
                <div className={boardSettings}>
                    <Icon onClick={() => console.log('board')}
                          className={iconSettings}
                          iconName={'TripleColumn'}/>
                    <Icon onClick={() => console.log('line')}
                          className={iconSettings}
                          iconName={'GroupedList'}/>
                </div>
            </div>
        </Box>
    )
}

export default ProjectHeader;