import {StatusEnum} from "../enums/Status/status.enum";
import {TaskType} from "../types/Task/task.type";
import {ListOfStatuses} from "../types/StatusDetailsType/listOfStatuses";

export const manipulateTasksByStatus = (tasks: Array<TaskType>) => {
    let currentStatusList: ListOfStatuses = {
        in_progress: { name: "On Going", tasks: [] },
        waiting: { name: "On hold", tasks: [] },
        paused: { name: "Paused", tasks: [] },
        completed: { name: "Completed", tasks: [] }
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