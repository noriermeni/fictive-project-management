import React from "react";
import {getTaskListCardClassNames} from "./tasktListCard.style";
import {useTheme} from "@fluentui/react";
import Title from "../../Title/title.component";
import TaskLineField from "../TaskLineField/taskLineField.component";
import {TaskType} from "../../../types/Task/task.type";

interface Props {
    status_name: string;
    tasks: Array<TaskType>;
}

export default function TaskListCard({tasks, status_name}: Props) {

    const {palette} = useTheme();
    const {container} = getTaskListCardClassNames(palette);

    const tasksList = (tasks: Array<TaskType>) => {
        return (
            <div>
                {tasks.length > 0 && tasks.map(task => <TaskLineField {...task} />)}
            </div>
        )
    }

    return (
        <div className={container}>
            <Title text={status_name} />
            {tasksList(tasks)}
        </div>
    );
}