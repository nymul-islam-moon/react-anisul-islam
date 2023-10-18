/**
 * Third Party Section
 */
import React, { useState, useEffect } from 'react';

/**
 * Component Section | main branch
 */
import Style from './style.css';
import DataFetch from "./HOOKS/useEffect/DataFetch";

const App = () => {
     return (
         <div>
             <h1><DataFetch /></h1>
         </div>
     );
};

export default App;