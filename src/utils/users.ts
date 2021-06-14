import { UserInterface } from "../components/user-modal";
import apiConnector from "./api-connector";
import { getToken } from "./auth";

export async function getUsers(): Promise<UserInterface[]> {
    try {
        const request = await apiConnector<{users:UserInterface[]}>('/users', 'GET', undefined, getToken());
        return request.users;
    } catch {
        return [];
    }
}
