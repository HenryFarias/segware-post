import axios from 'axios';

const URL_DEFAULT = process.env.REACT_APP_HOST_BACKEND + "/post";
const PAGINATION_SIZE = process.env.REACT_APP_PAGINATION_SIZE;

export default {
    save: async (payload) => {
        await axios.post(URL_DEFAULT, payload);
    },
    delete: async (id) => {
        await axios.delete(`${URL_DEFAULT}/${id}`);
    },
    list: async (page) => {
        const response = await axios.get(`${URL_DEFAULT}?size=${PAGINATION_SIZE}&page=${page}`);
        return response.data;
    },
    addUpVote: async (id) => {
        axios.post(`${URL_DEFAULT}/${id}/add/upVote`);
    },
    removeUpVote: async (id) => {
        axios.post(`${URL_DEFAULT}/${id}/remove/upVote`);
    },
};