import React from "react";
import {useTheme} from "@fluentui/react";
import {getTaskListCardClassNames} from "./tasktListCard.style";
import Title from "../../Title/title.component";
import TaskLineField from "../TaskLineField/taskLineField.component";
import {TaskType} from "../../../types/Task/task.type";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import StatusWrapper from "../../StatusWrapper/statusWrapper.component";

export default function TaskListCard({name, status, tasks}: StatusDetailsType) {

    const {palette} = useTheme();
    const {container, messageBox} = getTaskListCardClassNames(palette);

    const tasksList = (tasks: Array<TaskType>) => {
        console.log(tasks)
        return (
            <div>
                {tasks.map(task => <TaskLineField {...task} />)}
            </div>
        )
    }

    return (
        <StatusWrapper name={name} status={status}>
            {tasks.length > 0 && tasksList(tasks)}
            {tasks.length <= 0 && <div className={messageBox}>
                <Title size={"sm"} text={`${name} status has no declared tasks!`} />
            </div>}
        </StatusWrapper>
    );
}