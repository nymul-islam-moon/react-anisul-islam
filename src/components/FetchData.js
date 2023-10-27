import React, { useState, useEffect } from "react";

const FetchData = () => {

    const url = 'http://localhost:8888/webapick/wp-json/wp/v2/posts';


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
            console.log('Error is : ' + error);
        }

    }

    useEffect(() => {
        fetchData( url );
    }, [])

    return data;
};

export default FetchData;