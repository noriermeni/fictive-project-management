import React, {useEffect, useState} from "react";
import {TaskType} from "../../../types/Task/task.type";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import {manipulateTasksByStatus} from "../../../utils/manipulateTasksByStatus";

export default function TaskList(givenTasks: Array<TaskType>) {
    const [ tasks, setTasks ] = useState<Array<TaskType>>([...Object.values(givenTasks)]);
    const [ statusList, setStatusList ] = useState<Array<StatusDetailsType>>([]);

    useEffect(() => {
        const givenStatusList = [...Object.values(manipulateTasksByStatus(tasks))];
        setStatusList(givenStatusList)
    }, [tasks])

    return (
        <div>
            {statusList && statusList.map((status: StatusDetailsType) => <TaskListCard status_name={status.name} tasks={status.tasks} />)}
        </div>
    );
}