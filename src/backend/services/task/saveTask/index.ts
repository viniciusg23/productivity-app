import { Application } from "../../../Application";
import { TaskRepository } from "../../../repositories/taskRepository";
import { ITaskRepository } from "../../../repositories/taskRepository/ITaskRepository";
import { SaveTaskService } from "./SaveTaskService";


const taskRepository: ITaskRepository = new TaskRepository(Application.db);

const saveTaskService: SaveTaskService = new SaveTaskService(taskRepository);

export { saveTaskService };
