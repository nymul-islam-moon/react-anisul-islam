import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = ( url, config ) => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState( null );
    const [ data, setData ] = useState( [] );

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get( url, config );
            const data = response.data;
            setData( data );
            setIsLoading( false );
            setError( null );

        } catch ( e ) {
            setIsLoading(false);
            setError( e );
            console.log('Error is : ' + error);
        }
    }

    useEffect(() => {
        fetchData();
    })

    return data;
};

export default FetchData;