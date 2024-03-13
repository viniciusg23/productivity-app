export class Unit {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    // Getters
    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    // Setters
    setId(id: string): void {
        this.id = id;
    }

    setName(name: string): void {
        this.name = name;
    }
}
