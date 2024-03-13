import { Task } from "../../../models/Task";
import { ITaskRepository } from "../../../repositories/taskRepository/ITaskRepository";
import { ISaveTaskDTO } from "./ISaveTaskDTO";

export class SaveTaskService {
    private repository: ITaskRepository;

    public constructor(repository: ITaskRepository){
        this.repository = repository;
    }

    public async execute(data: ISaveTaskDTO){
        try {
            if(!data.name) throw new Error("Invalid Fields.");

            const verifyTask = await this.repository.findByName(data.name);

            if(verifyTask){
                throw new Error("This task already exists.");
            }

            const id = Math.random().toString(16);
            const newTask = new Task(
                id,
                data.name,
                data.description,
                data.goal,
                data.unitId,
                data.active,
                data.schedule,
                data.notification
            );

            await this.repository.save(newTask);

        } catch (error) {

        }
    }
}
