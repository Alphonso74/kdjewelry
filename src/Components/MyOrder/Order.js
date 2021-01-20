import React from 'react';



const Order = (props) => (
    <tr key={props.id}>
        <td className="center-align"><button className="btn black white-text hoverable" onClick={props.clicked}><i className="material-icons " >cancel</i></button></td>
        <td className="center-align">{props.name}</td>
        <td className="center-align">${props.price}</td>
        <td className="center-align">{props.components.style} <br/>{props.components.wireType}<br/>{props.components.beadType}<br/>{props.components.specialInstructions} </td>


    </tr>
);

export default Order;
