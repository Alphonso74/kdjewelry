import * as actionTypes from './actions';
import {updateObject} from "../store/utility";

const initialState = {

    numberOfItems: 0,
    Items: [],
    totalPrice: 0
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const deleteItem = (state,action) => {
    const updatedArray = state.Items.filter(item  => item.id !== action.id);
    return updateObject(state, {
        Items: updatedArray,
        numberOfItems: state.numberOfItems - 1,
        totalPrice: state.totalPrice - action.itemPrice})

};

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.ADD_ITEMTOCART:
            // return{
            //
            //     ...state,
            //     numberOfItems: state.numberOfItems + 1,
            //     Items: state.Items.push(action.itemName),
            //     totalPrice: state.totalPrice + action.itemPrice
            //
            //
            // };

            return updateObject(state, {Items: state.Items.concat({
                    id: getRandomInt(1000),
                    itemName: action.itemName,
                    itemPrice: action.itemPrice,
                    itemComponents: action.itemComponents}),
                    numberOfItems: state.numberOfItems + 1,
                    totalPrice: action.itemPrice + state.totalPrice });


        case actionTypes.REMOVE_ITEMFROMCART:

            const updatedArray = state.Items.filter(items  => items.id !== action.itemID);
            console.log(action.itemID);
            return {
                ...state,
                Items: updatedArray,
                numberOfItems: state.numberOfItems - 1,
                totalPrice:  state.totalPrice - action.itemPrice

            }



            default:
            return state;
    }



};


export default reducer;
