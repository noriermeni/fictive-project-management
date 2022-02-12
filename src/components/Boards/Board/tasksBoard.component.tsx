import React from "react";
import TaskListCard from "../TaskListCard/taskListCard.component";
import BoardWrapper from "../BoardWrapper/boardWrapper.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TasksBoard() {
    const statusCard = (status: StatusDetailsType, idx: number) => <TaskListCard key={idx} {...status} />;
    return <BoardWrapper cardElement={statusCard}/>;
}