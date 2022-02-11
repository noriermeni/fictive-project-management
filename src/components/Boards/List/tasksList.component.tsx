import React, {useEffect, useState} from "react";
import {TaskType} from "../../../types/Task/task.type";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import {manipulateTasksByStatus} from "../../../utils/manipulateTasksByStatus";
import {useSelector} from "react-redux";
import ProjectHeader from "../../ProjectHeader/projectHeader.component";

export default function TaskList() {
    const [statusList, setStatusList] = useState<Array<StatusDetailsType>>([]);
    const {selectedProjectTasks} = useSelector(state => (state as any).project);

    useEffect(() => {
        const givenStatusList = [...Object.values(manipulateTasksByStatus(selectedProjectTasks))];
        setStatusList(givenStatusList);
    }, [selectedProjectTasks])

    return (
        <div>
            list
            {statusList && statusList.map((status: StatusDetailsType) => <TaskListCard {...status} />)}
        </div>
    );
}