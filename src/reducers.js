const initialState = {
    items: [],
    itemCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [action.payload, ...state.items],
                itemCount: state.itemCount + 1
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART':
            return {
                ...state,
                items: initialState
            }
        case 'INCREMENT_ITEM':
            return {
                ...state,
                itemCount: state.itemCount + 1
            }
        case 'DECREMENT_ITEM':
            return {
                ...state,
                itemCount: state.itemCount - 1
            }
        default:
            return state
    }
}

export default cart