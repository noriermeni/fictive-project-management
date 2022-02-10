import {AttachmentType} from "../Attachment/attachment.type";
import {NotesType} from "../Notes/notes.type";
import {TaskType} from "../Task/task.type";
import {UserType} from "../User/user.type";
import {StatusEnum} from "../../enums/Status/status.enum";

export interface ProjectType {
    key?: string;
    id: string;
    parent_id: string;
    name: string;
    description: string;
    created_by: string;
    created_at: Date;
    finish_date: Date;
    evaluation: number;
    status: StatusEnum;
    attachment: Array<AttachmentType>;
    notes: Array<NotesType>;
    tasks: Array<TaskType>;
    employees: Array<UserType>
    childrenProjects: Array<ProjectType>;
    isChildren?: boolean
}