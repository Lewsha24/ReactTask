import axios from 'axios'
import {useCallback, useState} from 'react';

// Без сраного useEffect 2 ревизвия кода

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (options = {}) => {
        setIsLoading(true);
        try {
            const response = await axios.get(url, options);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const refetch = useCallback(
        async (newOptions = {}) => {
            await fetchData({ ...options, ...newOptions });
        },
        [fetchData, options]
    );



    return { data, isLoading, error, refetch };
};

// export function useFetch (url, options = {}) {
//     // Отвечает за состояние стейта в компоненте:
//     const [data, setData] = useState();
//     // Отвечает за состояние загрузки в компоненте
//     const [isLoading, setLoading] = useState(false)
//     // Отвечает за состояние ошибок
//     const [error, setError] = useState(null)
//
//
//         useEffect(() => {
//             setLoading(true)
//                 try{
//                     // Сюда передаем url, с которым мы будем работать
//                     // Хотя я бы не использовал переменную, она тут лишняя
//                     const apiUrl = url;
//                     // Делаем запрос через аксиос
//                     axios.get(apiUrl, options)
//                         .then(res => {
//                             setData(res.data);
//                         })
//                         .catch(err => {
//                             setError(err)
//                         })
//                         .finally(
//                             setLoading(false)
//                         )
//                 }catch (e) {
//                     console.log(e)
//                 }
//
//         }, [url]);
//
//         const refetch = async (newOptions = {}) => {
//             await ({ ...options, ...newOptions });
//         };
//     return {
//         data,
//         isLoading,
//         error,
//         refetch,
//     }
// }