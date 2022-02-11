import {TaskType} from "../Task/task.type";
import {StatusEnum} from "../../enums/Status/status.enum";

export interface StatusDetailsType {
    name: string;
    status: StatusEnum;
    tasks: Array<TaskType>;
}