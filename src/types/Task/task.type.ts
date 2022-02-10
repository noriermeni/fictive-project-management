import {StatusEnum} from "../../enums/Status/status.enum";
import {UserType} from "../User/user.type";

export interface TaskType {
    id: string;
    title: string;
    description: string;
    estimation_date: Date;
    created_by: string;
    created_at: Date;
    status: StatusEnum;
    assignee: UserType;
    reporter: string;
    comments: Array<any>;
}