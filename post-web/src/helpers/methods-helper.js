import {getSessionStorage} from "./storage-helper";

export const hasPermission = (roles) => {
    let hasPermission = false;

    if (getUserLogged()) {
        getUserLogged().roles.forEach((role) => {
            if (roles.includes(role)) {
                hasPermission = true;
            }
        });
    }

    return hasPermission;
};

export const getUserLogged = () => {
    return getSessionStorage("user");
};