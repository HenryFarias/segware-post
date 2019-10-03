import axios from 'axios';

const URL_DEFAULT = process.env.REACT_APP_HOST_BACKEND;

export default {
    login: async (payload) => {
        const response = await axios.post(URL_DEFAULT + "/login", payload);
        return response.data;
    },
    list: async () => {
        const response = await axios.get(URL_DEFAULT + "/user");
        return response.data;
    },
    save: (usuario) => {
        axios.post(URL_DEFAULT + "/user", usuario);
    },
    notification: (token) => {
        axios.post(`${URL_DEFAULT}/user/notification/register?token=${token}`);
    },
};