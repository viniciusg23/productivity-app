export class Task {
    private id: string;
    private name: string;
    private description: string;
    private goal: number;
    private unitId: string;
    private active: boolean;
    private schedule: string;
    private notification: string;

    constructor(id: string, name: string, description: string, goal: number, unitId: string, active: boolean, schedule: string, notification: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.goal = goal;
        this.unitId = unitId;
        this.active = active;
        this.schedule = schedule;
        this.notification = notification;
    }

    // Getters
    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    getGoal(): number {
        return this.goal;
    }

    getUnitId(): string {
        return this.unitId;
    }

    isActive(): boolean {
        return this.active;
    }

    getSchedule(): string {
        return this.schedule;
    }

    getNotification(): string {
        return this.notification;
    }

    // Setters
    setId(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setGoal(goal: number): void {
        this.goal = goal;
    }

    setUnitId(unitId: string): void {
        this.unitId = unitId;
    }

    setActive(active: boolean): void {
        this.active = active;
    }

    setSchedule(schedule: string): void {
        this.schedule = schedule;
    }

    setNotification(notification: string): void {
        this.notification = notification;
    }
}
