import axiosInstance from './Interceptor';

export const getCardList = async () => {
    const res = await axiosInstance.get('/cards?pageSize=13');
    return res.data;
};
