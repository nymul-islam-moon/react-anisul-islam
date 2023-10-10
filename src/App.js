import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App(){

    let items = [];

    for ( let  i = 0; i < Data.length; i++ ) {
        items.push( <Card titleText={ Data[i].title } descText={ Data[i].desc }/> )
    }

    return <div>
        <h1 className={ 'headingStyle' }>TO DO APP</h1>
        { items }
    </div>;
}

export default App;