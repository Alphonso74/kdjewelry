import * as actionTypes from './actions';
import {updateObject} from "../store/utility";

const initialState = {

    numberOfItems: 0,
    Items: [],
    totalPrice: 0
}

const deleteItem = (state,action) => {
    const updatedArray = state.Items.filter(item  => item.id !== action.id);
    return updateObject(state, {
        Items: updatedArray,
        numberOfItems: state.numberOfItems - 1,
        totalPrice: state.totalPrice - action.itemPrice})

}

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
                    id: state.numberOfItems,
                    itemName: action.itemName,
                    itemPrice: action.itemPrice})})

        case actionTypes.REMOVE_ITEMFROMCART:

                return deleteItem(state,action);



            default:
            return state;
    }



};


export default reducer;
