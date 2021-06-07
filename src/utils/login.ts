import apiConnector from "./api-connector";

// Yes, i know, this is not a best practice, but as written in the README the project is for educational purposes
export function saveToken(token: string): void {
    localStorage.setItem('token', token);
}

export function getToken(): string {
    return localStorage.getItem('token') || '';
}

export async function checkLogin() {
    return await apiConnector('/login', 'GET', undefined, getToken());
}
