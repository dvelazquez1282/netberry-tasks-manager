import { User } from "../models/user.model";

export interface LoginResponse {
    accessToken: string,
    user: User
}
