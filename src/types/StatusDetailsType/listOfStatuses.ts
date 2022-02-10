import {StatusDetailsType} from "./statusDetails.type";

export interface ListOfStatuses {
    in_progress: StatusDetailsType;
    waiting: StatusDetailsType;
    paused: StatusDetailsType;
    completed: StatusDetailsType;
}