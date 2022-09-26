import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        
        fetch(url)
        .then((res) => {
            if(res.ok) return res.json()
            else throw res.status;
        })
        .then((data) => {
            if(data.error) throw data.error;
            setData(data);
            setIsPending(false);
            setError("")
            return data;
        })
        .catch((error) => {
            setError(error);
            setIsPending(false);
        })
    }, [url])

    return ( {isPending, data, error} );
}
 
export default useFetch;