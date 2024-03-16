import axiosInstance from "../BaseService";

const getUser = async () => {
    try {
        const response = await axiosInstance.get('/user.json');
        return response.data;
    } catch (error) {
        throw new Error('Hubo un error al obtener el usuario');
    }
};

export default {
    getUser
}