import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App(){

    let items = [];

    // <Card titleText={ Data[i].title } descText={ Data[i].desc }/>

    items = Data.map( ( item ) => <Card titleText={ item.title } descText={ item.desc }/> )

    return <div>
        <h1 className={ 'headingStyle' }>TO DO APP</h1>
        { items }
    </div>;
}

export default App;