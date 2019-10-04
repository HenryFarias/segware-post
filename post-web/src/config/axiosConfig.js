import axios from 'axios';
import swal from 'sweetalert';
import {getSessionStorage} from "../helpers/storage-helper";

axios.defaults.baseURL = `/`;

export default axios;

export const registerAxiosInterceptors = (store) => {
    axios.interceptors.request.use(function (config) {
        if (!config.url.includes("login")) {
            const user = getSessionStorage("user");
            config.headers.Authorization = 'Bearer ' + user.token;
        }
        return config;
    });

    axios.interceptors.response.use((response) => {
        const data = response.data;
        if (data.msg) {
            swal(data.msg, "", data.type);
        }
        return response;
    }, function (error) {
        if (error.response.status === 403) {
            swal("Não autorizado", "", "error");
            return Promise.reject(error.response);
        }
        swal(error.response.data ? error.response.data.msg : "Erro", "", "error");
        return Promise.reject(error.response);
    });
};