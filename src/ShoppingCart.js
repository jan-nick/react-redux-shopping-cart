import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementItem, decrementItem } from './actions'

const CartItem = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    return (
        <li className="cart-item">
            <div className="cart-actions">
                <button onClick={() => dispatch(incrementItem())}>+</button>
                <button onClick={() => dispatch(decrementItem())}>-</button>
                <button>x</button>
            </div>
            <p>{cart}x</p>
            <p>Item</p>
            <p>50 €</p>
        </li>
    )
}

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="cart-container">
                <h2>Your Cart</h2>
                <ul className="cart-items">
                    <CartItem />
                    {/* ! Hard Coded*/}
                    <li className="cart-item">
                        <div className="cart-actions">
                            <button>+</button>
                            <button>-</button>
                            <button>x</button>
                        </div>
                        <p>1x</p>
                        <p>Item</p>
                        <p>80 €</p>
                    </li>
                    <li className="cart-item">
                        <div className="cart-actions">
                            <button>+</button>
                            <button>-</button>
                            <button>x</button>
                        </div>
                        <p>2x</p>
                        <p>Item</p>
                        <p>50 €</p>
                    </li>
                </ul>
                <hr />
                <div className="cart-footer">
                    <button className="clear-cart">Clear Cart</button>
                    <p className="cart-total">180 €</p>
                </div>
            </div>
        )
    }
}
