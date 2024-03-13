import { Task } from "../../models/Task";
import { IRepository } from "../IRepository";

export interface ITaskRepository extends IRepository<Task> {
    findByName(name: string): Promise<Task | null>
}
