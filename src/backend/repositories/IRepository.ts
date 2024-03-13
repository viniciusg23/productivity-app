export interface IRepository<T> {
    save(item: T): Promise<void>;
    update(item_id: string, item: T): Promise<void>;
    findById(item_id: string): Promise<T | null>;
    remove(item_id: string): Promise<T | null>;
}
