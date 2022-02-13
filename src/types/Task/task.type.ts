import {StatusEnum} from "../../enums/Status/status.enum";
import {UserType} from "../User/user.type";
import {AttachmentType} from "../Attachment/attachment.type";
import {NotesType} from "../Notes/notes.type";

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
    notes: Array<NotesType>;
    attachment: Array<AttachmentType>;
}