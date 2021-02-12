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

// const deleteItem = (state,action) => {
//     const updatedArray = state.Items.filter(item  => item.id !== action.id);
//     return updateObject(state, {
//         Items: updatedArray,
//         numberOfItems: state.numberOfItems - 1,
//         totalPrice: state.totalPrice - action.itemPrice})
//
// };

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

            if(state.Items === null || state.Items === undefined){

                state.Items = []
            }



            return updateObject(state, {Items: state.Items.concat({
                    id: getRandomInt(1000),
                    itemName: action.itemName,
                    itemPrice: action.itemPrice,
                    itemComponents: action.itemComponents}),
                    numberOfItems: state.numberOfItems + 1,
                    totalPrice: action.itemPrice + state.totalPrice });

            // sessionStorage.setItem('Items', state.Items)


        case actionTypes.REMOVE_ITEMFROMCART:

            const updatedArray = state.Items.filter(items  => items.id !== action.itemID);
            sessionStorage.setItem('Items', JSON.stringify(updatedArray));
            console.log(action.itemID);
            return {
                ...state,
                Items: updatedArray,
                numberOfItems: state.numberOfItems - 1,
                totalPrice:  state.totalPrice - action.itemPrice

            }

        case actionTypes.RESET_STORE:

            sessionStorage.clear();
            sessionStorage.removeItem('Items');

            return {
                // ...state,
                Items: [],
                numberOfItems: 0,
                totalPrice:  0

            };

            default:
            return state;

        case actionTypes.CHECK_STATE:

            const Items1 = sessionStorage.getItem('Items');

            const Items2 = JSON.parse(Items1);

            console.log(Items2 + ' poop');

            if(Items2 === null || Items2 === undefined || Items2 === '') {

                sessionStorage.removeItem('Items');

                return {
                    Items: [],
                    numberOfItems: 0,
                    totalPrice: 0

                }
            }
            else{
                console.log('pee');

            return {


                Items: Items2.Items,
                numberOfItems: Items2.numberOfItems,
                totalPrice: Items2.totalPrice


            }

            }

    }



};


export default reducer;
