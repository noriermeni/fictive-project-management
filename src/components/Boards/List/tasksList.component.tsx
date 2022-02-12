import React from "react";
import BoardWrapper from "../BoardWrapper/boardWrapper.component";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TaskList() {

    const statusCard = (status: StatusDetailsType) => <TaskListCard {...status} />;

    return <BoardWrapper cardElement={statusCard} />;
}