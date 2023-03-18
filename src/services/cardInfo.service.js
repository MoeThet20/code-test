import axiosInstance from './Interceptor';

export const getCardList = async (page = 1) => {
    const res = await axiosInstance.get(`/cards?pageSize=12&&page=${page}`);
    return res.data;
};
