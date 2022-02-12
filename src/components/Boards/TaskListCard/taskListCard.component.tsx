import React from "react";
import {useTheme} from "@fluentui/react";
import {getTaskListCardClassNames} from "./tasktListCard.style";
import Title from "../../Title/title.component";
import TaskLineField from "../TaskLineField/taskLineField.component";
import StatusWrapper from "../../StatusWrapper/statusWrapper.component";
import {TaskType} from "../../../types/Task/task.type";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import {useSelector} from "react-redux";
import classNames from "classnames";

export default function TaskListCard({name, status, tasks}: StatusDetailsType) {
    const {projectPathname} = useSelector(state => (state as any).project);
    const {palette} = useTheme();
    const {wrapperContainer, messageBox} = getTaskListCardClassNames(palette);

    const tasksList = (tasks: Array<TaskType>) => tasks.map(task => <TaskLineField {...task} />);

    return (
        <StatusWrapper className={classNames({
            [wrapperContainer]: projectPathname !== "list"
        })} name={name} status={status}>
            {tasks.length > 0 && tasksList(tasks)}
            {tasks.length <= 0 && <div className={messageBox}>
                <Title size={"sm"} text={`${name} status has no declared tasks!`} />
            </div>}
        </StatusWrapper>
    );
}