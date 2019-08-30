import React from 'react'
import { connect } from 'react-redux'
import { incrementItem, decrementItem } from '../actions'

const CartItem = props => {
    return (
        <ul className="cart-items">
            <li className="cart-item">
                {/*<div className="cart-actions">
                    <button onClick={() => )}>+</button>
                    <button onClick={() => )}>-</button>
                    <button>x</button>
                </div>
                <p>{cartReducer}x</p>
                <p>Item</p>
                <p>50 €</p>*/}
            </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(CartItem)
