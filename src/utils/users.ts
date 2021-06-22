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

export async function editUser(user: UserInterface): Promise<UserInterface> {
    const request = await apiConnector<{user:UserInterface}>(`/users/${user.id}`, 'PUT', user, getToken());
    return request.user;
}

export async function deleteUser(userId: string): Promise<UserInterface> {
    const request = await apiConnector<{user:UserInterface}>(`/users/${userId}`, 'DELETE', undefined, getToken());
    return request.user;
}
