export function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token;
}

export function clearToken() {
    localStorage.removeItem('token');
}