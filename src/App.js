import React from "react";
import Card from "./components/Card";
import Data from "./data.json"
import List from "./components/UniqueList/List";

function App(){

    let items = [];

    // <Card titleText={ Data[i].title } descText={ Data[i].desc }/>

    return <div>
        <List />
    </div>;
}

export default App;