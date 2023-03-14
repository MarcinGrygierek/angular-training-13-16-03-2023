export enum TaskStatus {
    New = 'New',
    InProgress = 'InProgress',
    Done = 'Done'
}

export interface SingleTask {
    id: string;
    name: string;
    status: TaskStatus;
    hidden: boolean;
}

export interface ChangeTaskStatusEvent {
    taskId: string;
    newStatus: TaskStatus;
}