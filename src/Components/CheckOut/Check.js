import React from 'react';
import './CheckCSS.css'


const Check = (props) => (
    <div key={props.id} >

        <h1 className="center-align Caveat white-text">Item: {props.name}</h1>
        <h4 className="center-align Caveat white-text">Style: {props.components.style} <br/>Wire Type: {props.components.wireType}<br/>Bead Type: {props.components.beadType}<br/>Special Instructions: {props.components.specialInstructions} </h4>
        <h5 className="center-align Caveat white-text">Total: ${props.price}</h5>
        <hr className="rounded "/>

    </div>
);

export default Check;
