import { useEffect, useState } from "react";

function useItemFetch(url) {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then((res) => {
            if(res.ok !== true) {
                throw Error('error to fetch');
            }
            return res.json();
        }).then((data) => {
            setItem(data);
            setIsLoading(false);
            setError(null);
        }).catch((err) => {
            setError(err);
            setIsLoading(false);
        });
    }, []);

    return {item, isLoading, error};
}

export default useItemFetch;