import axiosInstance from "../BaseService";

const getPlans = async () => {
    try {
        const response = await axiosInstance.get('/plans.json');
        return response.data.list;
    } catch (error) {
        throw new Error('Hubo un error al obtener los planes');
    }
};

export default {
    getPlans
}