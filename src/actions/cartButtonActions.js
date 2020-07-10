export const ADD_TO_CART = 'flash/cart/ADD_ITEM';
export const REMOVE_FROM_CART = 'flash/cart/REMOVE_ITEM';


const addItem = (product) => ({type: ADD_TO_CART, product});
const removeItem = (productId) => ({type: REMOVE_FROM_CART, productId});


export const addToCart = (product) => dispatch => {

    dispatch(addItem(product))
}

export const removeFromCart = (id) => dispatch => {
    
    dispatch(removeItem(id))
}