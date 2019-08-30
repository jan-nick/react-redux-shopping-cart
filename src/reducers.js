import itemData from './itemData'

const initialState = {
    items: itemData,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let addedItem = state.items.find(item => item.id === action.id)
            let existedItem = state.addedItems.find(item => action.id === item.id)

            if(existedItem) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + addedItem.price
                }
            } else {
                addedItem.quantity = 1
                let newTotal = state.total + addedItem.price

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        }
        case 'REMOVE_FROM_CART': {
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let newItems = state.addedItems.filter(item => action.id !== item.id)

            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)

            return {
                ...state,
                addedItems: newItems,
                total: newTotal
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                addedItems: [],
                total: 0
            }
        }
        case 'INCREMENT_ITEM': {
            let addedItem = state.items.find(item => item.id === action.id)
            addedItem.quantity += 1
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                total: newTotal
            }
        }
        case 'DECREMENT_ITEM': {
            let addedItem = state.items.find(item => item.id === action.id)
            if (addedItem.quantity === 1) {
                let newItems = state.addedItems.filter(item => item.id !== action.id)
                let newTotal = state.total - addedItem.price

                return {
                    ...state,
                    addedItems: newItems,
                    total: newTotal
                }
            } else {
                addedItem.quantity -= 1
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            }
        }
        default:
            return state
    }
}

export default cartReducer