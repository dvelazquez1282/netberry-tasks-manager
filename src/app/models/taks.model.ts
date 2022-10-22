import { Type } from "./type.model";

export class Task {
    id: number;
    title: string;
    description: string;
    deadline: string;
    createdAt: string;
    type: Type
}
