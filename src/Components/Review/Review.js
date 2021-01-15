import React from 'react';
import './ReviewCSS.css';

const Review = (props) => {

    console.log("From Review:" + props.name);

    // const reviews = [];

    // for(let ingredientName in props.ingredients) {
    //
    //     reviews.push(
    //         {
    //             name: props.name,
    //             message: props.message,
    //             item: props.item,
    //             // amount: props.ingredients[ingredientName]
    //         }
    //     );
    // }

    // const ingredientOutput = reviews.map(ig => {
    //     return <span
    //         style={{textTransform: 'capitalize',
    //             display: 'inline-block',
    //             margin: '0 8px',
    //             border: '1px solid #ccc',
    //             padding: '5px'}}
    //
    //
    //         key={ig.name}>
    //          {ig.name} ({ig.item})
    //
    //     </span>
    // });

    return(
        <div className="Order">
            <p>Name: {props.name}</p>
            <p>Item: {props.item}</p>
            <p>Review: {props.message}</p>

        </div>
    );

};

export default Review;
