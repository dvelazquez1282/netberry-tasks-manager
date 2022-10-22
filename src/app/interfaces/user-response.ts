import { User } from "../models/user.model";

export interface UserResponse {
    email: string;
    token: string;
    name: string;
    lastname: string;
}
