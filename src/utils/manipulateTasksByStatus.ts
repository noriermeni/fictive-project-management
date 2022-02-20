import {StatusEnum} from "../enums/Status/status.enum";
import {TaskType} from "../types/Task/task.type";
import {ListOfStatuses} from "../types/StatusDetailsType/listOfStatuses";

export const manipulateTasksByStatus = (tasks: Array<TaskType>) => {
    const currentStatusList: ListOfStatuses = {
        in_progress: { name: "On Going", status: StatusEnum.IN_PROGRESS, tasks: [] },
        waiting: { name: "On hold", status: StatusEnum.WAITING, tasks: [] },
        paused: { name: "Paused", status: StatusEnum.PAUSED, tasks: [] },
        completed: { name: "Completed", status: StatusEnum.COMPLETED, tasks: [] }
    }
    tasks && tasks.forEach((task: TaskType) => {
        switch (task.status) {
            case StatusEnum.COMPLETED:
                return currentStatusList.completed.tasks.push(task);
            case StatusEnum.IN_PROGRESS:
                return currentStatusList.in_progress.tasks.push(task);
            case StatusEnum.PAUSED:
                return currentStatusList.paused.tasks.push(task);
            case StatusEnum.WAITING:
                return currentStatusList.waiting.tasks.push(task);
        }
    })
    return currentStatusList;
}

export const findProjectStatus = (status: StatusEnum) => {
    switch (status) {
        case StatusEnum.COMPLETED:
            return "Completed";
        case StatusEnum.IN_PROGRESS:
            return "On going";
        case StatusEnum.PAUSED:
            return "Paused";
        case StatusEnum.WAITING:
            return "On hold";
    }
}