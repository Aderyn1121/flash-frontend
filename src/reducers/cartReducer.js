import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cartButtonActions'


const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case ADD_TO_CART:
            newState.cart.push(action.product)
            return newState;
        
        case REMOVE_FROM_CART:
            for( let i = 0; i < newState.cart.length; i++){
                if (newState.cart[i].id === action.productId){
                    newState.cart.splice(i, 1)
                    break;
                }
            }
            return newState;
        
        default:
            return state;
    }
}


export default cartReducer 