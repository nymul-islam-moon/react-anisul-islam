import React from "react";
import Card from "./components/Card";
import Data from "./data.json"

function App(){

    let items = [];

    // <Card titleText={ Data[i].title } descText={ Data[i].desc }/>

    return <div>
        <h1 className={ 'headingStyle' }>TO DO APP</h1>
        { Data.map( ( item, index ) => <Card key={index} titleText={ item.title } descText={ item.desc }/> ) }
    </div>;
}

export default App;