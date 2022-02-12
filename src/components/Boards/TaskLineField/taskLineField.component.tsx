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
import {useSelector} from "react-redux";

export default function TaskLineField(props: TaskType) {
    const {projectPathname} = useSelector(state => (state as any).project);
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
        containerColumn,
        row,
        paddingInline,
        iconSettings,
        columnSize,
        customUserItemContainer,
        titleWrap
    } = getTaskLineFieldClassNames(palette);

    const checkIfEmployeeIsAssignee = () => {
        let emptyUser: Array<UserType> = [{id: "X", first_name: "X", last_name: "X"}]
        if (assignee) return [assignee];
        return emptyUser;
    }

    return (
        <div className={classNames(({
            [container]: true,
            [containerColumn]: projectPathname !== "list"
        }))}>
            <div className={row}>
                <StatusCircle status={status}/>
                <Title className={classNames(({
                    [paddingInline]: true,
                    [titleWrap]: projectPathname !== "list"
                }))} size={'sm'} text={title ? title : `Title not found!`}/>
            </div>
            <div className={row}>
                <Icon className={classNames({
                    [paddingInline]: true,
                    [iconSettings]: true
                })} iconName={'Library'}/>
                <Icon className={classNames({
                    [paddingInline]: true,
                    [iconSettings]: true
                })} iconName={'Boards'}/>
                {estimation_date && <Title className={paddingInline} size={"sm"} text={formatDate(estimation_date)}/>}
                <div className={columnSize}>
                    {assignee && <UsersList showUnknownPersonaCoin={!assignee} showDetails
                                            className={customUserItemContainer}
                                            employees={checkIfEmployeeIsAssignee()} hidePersonaDetails/>}
                </div>
            </div>
        </div>
    )
}