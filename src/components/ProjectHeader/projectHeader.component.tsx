import React from "react";
import {Icon, PersonaSize, useTheme} from "@fluentui/react";
import {getProjectHeaderClassNames} from "./projectHeader.style";
import Title from "../Title/title.component";
import UsersList from "../UsersList/usersList.component";
import {UserType} from "../../types/User/user.type";
import {Link, useNavigate, useParams} from "react-router-dom";
import classNames from "classnames";

interface Props {
    title: string;
    employees: Array<UserType>;
}

const ProjectHeader = (props: Props) => {
    const {title, employees} = props;
    const {id} = useParams();
    const navigate = useNavigate();
    const {palette} = useTheme();
    const {container, projectName, boardSettings, iconSettings, marginInline} = getProjectHeaderClassNames(palette);

    return (
        <div className={container}>
            <div className={boardSettings}>
                <Icon className={iconSettings}
                      iconName={'DietPlanNotebook'}/>
                <Title className={projectName} size={'xl'} text={title}/>
                <Icon className={classNames({
                    [marginInline]: true,
                    [iconSettings]: true
                })} iconName={'Library'}
                    title={"Attachments"} />
                <Icon className={classNames({
                    [marginInline]: true,
                    [iconSettings]: true
                })} iconName={'Boards'}
                      title={"Notes"} />
                <div className={marginInline}>
                    <UsersList employees={employees}
                               circleSize={PersonaSize.size8}
                               maxEmployeesDisplayable={3}/>
                </div>
            </div>
            <div className={boardSettings}>
                <Link to={`board`}>
                    <Icon className={classNames({
                        [marginInline]: true,
                        [iconSettings]: true
                    })} iconName={'TripleColumn'}/>
                </Link>
                <Link to={`list`}>
                    <Icon className={classNames({
                        [marginInline]: true,
                        [iconSettings]: true
                    })} iconName={'GroupedList'}/>
                </Link>
            </div>
        </div>
    )
}

export default ProjectHeader;