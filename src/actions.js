import itemData from './itemData'

export const addToCart = item => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const removeFromCart = () => {
    return {
        type: 'REMOVE_FROM_CART'
    }
}
export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}
export const incrementItem = () => {
    return {
        type: 'INCREMENT_ITEM'
    }
}
export const decrementItem = () => {
    return {
        type: 'DECREMENT_ITEM'
    }
}