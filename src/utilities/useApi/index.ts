import { useEffect, useRef, useState } from 'react';
import { Metadata } from './types';
import { t } from 'i18next';

const useApi = ({ URL, requestOption }: Metadata) => {
    const [data, setData] = useState({ final_object: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>();
    const countRef = useRef(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL, {
                    method: requestOption.method,
                    body: requestOption.body,
                });
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            } catch (e) {
                console.error(t('error.responseError'), e);
                setError(e);
                setLoading(false);
            }
        };

        fetchData();
    }, [URL, countRef, requestOption.body, requestOption.method]);

    return { data, loading, error };
}

export default useApi;