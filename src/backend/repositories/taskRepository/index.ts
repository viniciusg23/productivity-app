import { Task } from "../../models/Task";
import { ITaskRepository } from "./ITaskRepository";
import { SQLiteDatabase } from "react-native-sqlite-storage";

export class TaskRepository implements ITaskRepository {

    private db: SQLiteDatabase;

    constructor(db: SQLiteDatabase) {
        this.db = db;
    }

    async save(item: Task): Promise<void> {
        const query = `
                INSERT OR REPLACE INTO Task(id, name, description, goal, unit_id, active, schedule, notification)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `;

        await this.db.executeSql(query, [
            item.getId(),
            item.getName(),
            item.getDescription(),
            item.getGoal(),
            item.getUnitId(),
            item.isActive() ? 1 : 0,
            item.getSchedule(),
            item.getNotification()
        ]);
    }
    async update(item_id: string, item: Task): Promise<void> {
        const query = `
                UPDATE Task
                SET name = ?, description = ?, goal = ?, unit_id = ?, active = ?, schedule = ?, notification = ?
                WHERE id = ?
            `;

        await this.db.executeSql(query, [
            item.getName(),
            item.getDescription(),
            item.getGoal(),
            item.getUnitId(),
            item.isActive() ? 1 : 0,
            item.getSchedule(),
            item.getNotification(),
            item_id
        ]);

    }

    async findById(item_id: string): Promise<Task | null> {
        const query = `
                SELECT id, name, description, goal, unit_id, active, schedule, notification
                FROM Task
                WHERE id = ?
            `;

        const result = await this.db.executeSql(query, [item_id]);
        if (result[0].rows.length === 0) {
            return null;
        }

        const row = result[0].rows.item(0);
        const task = new Task(
            row.id,
            row.name,
            row.description,
            row.goal,
            row.unit_id,
            row.active === 1,
            row.schedule,
            row.notification
        );

        return task;
    }

    async remove(item_id: string): Promise<Task | null> {
        const taskToRemove = await this.findById(item_id);
        if (!taskToRemove) {
            return null;
        }

        const query = `
                DELETE FROM Task
                WHERE id = ?
            `;

        await this.db.executeSql(query, [item_id]);

        return taskToRemove;
    }

    async findByName(name: string): Promise<Task | null> {
        const query = `
                SELECT id, name, description, goal, unit_id, active, schedule, notification
                FROM Task
                WHERE name = ?
            `;

        const result = await this.db.executeSql(query, [name]);
        if (result[0].rows.length === 0) {
            return null;
        }

        const row = result[0].rows.item(0);
        const task = new Task(
            row.id,
            row.name,
            row.description,
            row.goal,
            row.unit_id,
            row.active === 1,
            row.schedule,
            row.notification
        );

        return task;
    }

}
