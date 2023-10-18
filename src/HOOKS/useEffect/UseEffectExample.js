import React, {useEffect, useState} from "react";

const useEffectExample = () => {

    const [count, setCount] = useState(0);

    /**
     * Increase count value by 1
     * optional part, " For like this small method we can use anonymous method on the button! "
     */
    // const handleCount = ( e ) => {
    //     setCount( count => count + 1 );
    // }

    /**
     * Uses of useEffect() method
     * this method is like useState method but condition is this method must contain one anonymous method.
     * this method use for sideeffect or data fetch or DOM change.
     * It runs all time when the return value is rendered
     */
    useEffect(() => {
        console.log('UseEffect');
    });

    return (
        <div>
            {console.log('rendering..')}
            <h1>Count : {count}</h1>
            <button onClick={ () => { setCount(count => count + 1 ) } }>+</button>
        </div>
    )
}

export default useEffectExample;