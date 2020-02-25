import { ITask } from "./task.interface";

export class Task implements ITask {
    constructor(
        public id: number,
        public taskName: string,
        public taskStatus: boolean

    ){}
}