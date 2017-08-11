import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from "./component";

ReactDOM.render(
    <MyComponent label="Contador" initialValue={10}/>,
    document.getElementById('app')
);