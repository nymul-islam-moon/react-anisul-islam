import React from "react";
import Card from "./components/Card";

function App(){
    return <div>
        <h1 className={'headingStyle'}>TO DO APP</h1>
        <Card titleText={'This is the first card'} descText={'This is the description'}/>
        <Card titleText={'This is second title'} descText={'This is the description'} />
        <Card titleText={'This is the third card'} descText={'This is the description'} />
    </div>;
}

export default App;