import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {manipulateTasksByStatus} from "../../../utils/manipulateTasksByStatus";
import TaskListCard from "../TaskListCard/taskListCard.component";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";

export default function TaskList() {
    const [statusList, setStatusList] = useState<Array<StatusDetailsType>>([]);
    const {selectedProjectTasks} = useSelector(state => (state as any).project);

    useEffect(() => {
        const givenStatusList = [...Object.values(manipulateTasksByStatus(selectedProjectTasks))];
        setStatusList(givenStatusList);
    }, [selectedProjectTasks])

    return (
        <div>
            {statusList && statusList.map((status: StatusDetailsType) => <TaskListCard {...status} />)}
        </div>
    );
}