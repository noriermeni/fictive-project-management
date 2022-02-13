import React, {Fragment} from "react";
import BoardWrapper from "../BoardWrapper/boardWrapper.component";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TaskList() {
    const statusCard = (status: StatusDetailsType, idx: number) => <Fragment key={`${idx}_${status.key}_${status.name}`}>
        <TaskListCard {...status} />
    </Fragment>

    return <BoardWrapper cardElement={statusCard}/>;
}