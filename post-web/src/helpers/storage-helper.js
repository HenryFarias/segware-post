export const getSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
};

export const setSessionStorage = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
};