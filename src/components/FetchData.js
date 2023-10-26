import React, { useState, useEffect } from "react";

const FetchData = (url) => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState( null );
    const [ data, setData ] = useState( [] );
    // console.log(props);
    const fetchData = async ( url ) => {
        setIsLoading(true);

        try {
            const response = await fetch( url );
            const data = await response.json();

            setData( data );
            setIsLoading( false );
            setError( null );
            console.log(data);
        } catch ( e ) {
            setIsLoading(false);
            setError( e );
        }

    }

    useEffect(() => {
        fetchData( url );
    }, [])

    return data;
};

export default FetchData;