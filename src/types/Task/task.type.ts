import {StatusEnum} from "../../enums/Status/status.enum";

export interface TaskType {
    id: string;
    title: string;
    description: string;
    estimation_date: Date;
    created_by: string;
    created_at: Date;
    status: StatusEnum;
    assignee: string;
    reporter: string;
    comments: Array<any>;
}