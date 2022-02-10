import React, {useEffect} from "react";
import {TaskType} from "../../../types/Task/task.type";
import {getTaskLineFieldClassNames} from "./taskLineField.style";
import {useTheme} from "@fluentui/react";
import StatusCircle from "../StatusCircle/statusCircle.component";
import Title from "../../Title/title.component";
import CustomFacepile from "../../CustomFacepile/customFacepile.component";

export default function TaskLineField(props: TaskType) {

    const {id, title, description, estimation_date, created_by, created_at, status, assignee, reporter, comments} = props;
    const {palette} = useTheme();
    const {container} = getTaskLineFieldClassNames(palette);

    useEffect(() => {
        console.log(`assigne`, assignee)
    }, [assignee])

    return (
        <div className={container}>
            <div>
                <StatusCircle status={status} />
            </div>
            <div>
                <Title size={'sm'} text={title} />
            </div>
            <div>
                {assignee && <CustomFacepile employees={[assignee]}/>}
                {!assignee && <Title text={`There is no Employee assigned`} />}
            </div>
        </div>
    )
}