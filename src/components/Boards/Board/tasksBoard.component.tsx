import React from "react";
import TaskListCard from "../TaskListCard/taskListCard.component";
import BoardWrapper from "../BoardWrapper/boardWrapper.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TasksBoard() {

    const statusCard = (status: StatusDetailsType) => <TaskListCard {...status} />;

    return <BoardWrapper cardElement={statusCard} />;
}