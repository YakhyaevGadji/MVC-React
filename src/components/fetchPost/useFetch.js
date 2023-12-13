import { useEffect, useState } from "react";

function useFetch(url, setUpdateFetch) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url).then((res) => {
            if(res.ok !== true) {
                throw Error('error chego to tam');
            }
            return res.json();
        }).then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });
    }, [setUpdateFetch]);

    return {data, isLoading, error};
}

export default useFetch;