import { openDatabase, enablePromise, SQLiteDatabase } from "react-native-sqlite-storage";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

export class Application {
    public static db: SQLiteDatabase;


    public constructor(){
    }

    public static fetch(route: string, method: RequestMethod){
        
    }
}
