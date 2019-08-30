export const addToCart = id => {
    return {
        type: 'ADD_TO_CART',
        id
    }
}
export const removeFromCart = id => {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
}
export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}
export const incrementItem = id => {
    return {
        type: 'INCREMENT_ITEM',
        id
    }
}
export const decrementItem = id => {
    return {
        type: 'DECREMENT_ITEM',
        id
    }
}