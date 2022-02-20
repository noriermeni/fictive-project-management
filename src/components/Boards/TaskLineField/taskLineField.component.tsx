import React from "react";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {useTheme} from "@fluentui/react";
import {getTaskLineFieldClassNames} from "./taskLineField.style";
import {formatDate} from "../../../utils/dateFormatter";
import StatusCircle from "../StatusCircle/statusCircle.component";
import Title from "../../Title/title.component";
import UsersList from "../../UsersList/usersList.component";
import HoverCardWrapper from "../../HoverCardWrapper/hoverCardWrapper.component";
import AttachmentsList from "../../AttachmentsList/attachmentsList.component";
import NotesList from "../../NotesList/notesList.component";
import {UserType} from "../../../types/User/user.type";
import {TaskType} from "../../../types/Task/task.type";

export default function TaskLineField(props: TaskType) {
    const {palette} = useTheme();
    const {projectPathname} = useSelector(state => (state as any).project);
    const {
        title,
        estimation_date,
        status,
        assignee,
        attachment,
        notes
    } = props;
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
        const emptyUser: Array<UserType> = [{id: "X", first_name: "X", last_name: "X"}]
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
                <HoverCardWrapper title={"Attachments"}
                                  className={classNames({
                                      [paddingInline]: true,
                                      [iconSettings]: true
                                  })} icon='Library'>
                    <AttachmentsList attachments={attachment}/>
                </HoverCardWrapper>
                <HoverCardWrapper title={"Notes"}
                                  className={classNames({
                                      [paddingInline]: true,
                                      [iconSettings]: true
                                  })} icon={'Boards'}>
                    <NotesList notes={notes}/>
                </HoverCardWrapper>
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