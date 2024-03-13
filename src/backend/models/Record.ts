export class Record {
    private id: string;
    private taskId: string;
    private date: string;
    private completed: number;

    constructor(id: string, taskId: string, date: string, completed: number) {
        this.id = id;
        this.taskId = taskId;
        this.date = date;
        this.completed = completed;
    }

    // Getters
    getId(): string {
        return this.id;
    }

    getTaskId(): string {
        return this.taskId;
    }

    getDate(): string {
        return this.date;
    }

    getCompleted(): number {
        return this.completed;
    }

    // Setters
    setId(id: string): void {
        this.id = id;
    }

    setTaskId(taskId: string): void {
        this.taskId = taskId;
    }

    setDate(date: string): void {
        this.date = date;
    }

    setCompleted(completed: number): void {
        this.completed = completed;
    }
}
