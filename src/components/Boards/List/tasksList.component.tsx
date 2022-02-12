import React from "react";
import BoardWrapper from "../BoardWrapper/boardWrapper.component";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TaskList() {
    const statusCard = (status: StatusDetailsType, idx: number) => <TaskListCard key={idx} {...status} />;
    return <BoardWrapper cardElement={statusCard}/>;
}