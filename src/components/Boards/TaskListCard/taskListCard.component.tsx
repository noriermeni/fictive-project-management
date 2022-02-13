import React, {Fragment} from "react";
import _ from "lodash";
import {useTheme} from "@fluentui/react";
import {getTaskListCardClassNames} from "./tasktListCard.style";
import Title from "../../Title/title.component";
import TaskLineField from "../TaskLineField/taskLineField.component";
import StatusWrapper from "../../StatusWrapper/statusWrapper.component";
import {TaskType} from "../../../types/Task/task.type";
import {StatusDetailsType} from "../../../types/StatusDetailsType/statusDetails.type";
import {useSelector} from "react-redux";
import classNames from "classnames";

export default function TaskListCard({name, status, tasks, key}: StatusDetailsType) {
    const {projectPathname} = useSelector(state => (state as any).project);
    const {palette} = useTheme();
    const {wrapperContainer, messageBox} = getTaskListCardClassNames(palette);

    const tasksList = (tasks: Array<TaskType>) => _.map(tasks, task => <Fragment key={`${task.id}`}>
        <TaskLineField {...task} />
    </Fragment>);

    return (
        <StatusWrapper className={classNames({
            [wrapperContainer]: projectPathname !== "list"
        })} name={name} status={status} key={`${status}_${key}`}>
            {tasks.length > 0 && tasksList(tasks)}
            {tasks.length <= 0 && <div className={messageBox}>
                <Title size={"sm"} text={`${name} status has no declared tasks!`} />
            </div>}
        </StatusWrapper>
    );
}