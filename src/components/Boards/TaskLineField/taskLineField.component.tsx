import React, {useEffect} from "react";
import {Icon, useTheme} from "@fluentui/react";
import {getTaskLineFieldClassNames} from "./taskLineField.style";
import {formatDate} from "../../../utils/dateFormatter";
import StatusCircle from "../StatusCircle/statusCircle.component";
import Title from "../../Title/title.component";
import CustomFacepile from "../../CustomFacepile/customFacepile.component";

import {TaskType} from "../../../types/Task/task.type";
import classNames from "classnames";
import UsersList from "../../UsersList/usersList.component";
import {UserType} from "../../../types/User/user.type";

export default function TaskLineField(props: TaskType) {

    const {
        id,
        title,
        description,
        estimation_date,
        created_by,
        created_at,
        status,
        assignee,
        reporter,
        comments
    } = props;
    const {palette} = useTheme();
    const {
        container,
        row,
        paddingInline,
        iconSettings,
        columnSize,
        customUserItemContainer
    } = getTaskLineFieldClassNames(palette);

    const checkIfEmployeeIsAssignee = () => {
        let emptyUser: Array<UserType> = [{id: "X", first_name: "X", last_name: "X"}]
        if (assignee) return [assignee];
        return emptyUser;
    }

    return (
        <div className={container}>
            <div className={row}>
                <StatusCircle status={status}/>
                <Title className={paddingInline} size={'sm'} text={title ? title : `Title not found!`}/>
            </div>
            <div className={row}>
                <Icon className={classNames({
                    [paddingInline]: true,
                    [iconSettings]: true
                })} iconName={'TripleColumn'}/>
                <Icon className={classNames({
                    [paddingInline]: true,
                    [iconSettings]: true
                })} iconName={'GroupedList'}/>
                {estimation_date && <Title className={paddingInline} size={"sm"} text={formatDate(estimation_date)}/>}
                <div className={columnSize}>
                    {/*{!assignee && <Title size={"sm"} text={`Not Assigned`}/>}*/}
                    {assignee && <UsersList showUnknownPersonaCoin={assignee ? false : true} showDetails
                                            className={customUserItemContainer}
                                            employees={checkIfEmployeeIsAssignee()} hidePersonaDetails/>}
                </div>
            </div>
        </div>
    )
}