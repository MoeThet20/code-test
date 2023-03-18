import axiosInstance from './Interceptor';

export const getCardList = async () => {
    const res = await axiosInstance.get('/cards?pageSize=3');
    return res.data;
};
