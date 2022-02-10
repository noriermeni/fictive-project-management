import {TaskType} from "../Task/task.type";

export interface StatusDetailsType {
    name: string;
    tasks: Array<TaskType>;
}