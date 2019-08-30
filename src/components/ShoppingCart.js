import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    removeFromCart,
    incrementItem,
    decrementItem,
    clearCart
} from '../actions'

class ShoppingCart extends Component {
    handleRemove = id => {
        this.props.removeFromCart(id)
    }

    handleAdd = id => {
        this.props.incrementItem(id)
    }

    handleSubtract = id => {
        this.props.decrementItem(id)
    }

    handleClear = () => {
        this.props.clearCart()
    }

    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                    <li className="cart-item" key={item.id}>
                        <div className="cart-actions">
                            <p>{item.quantity}x</p>
                            <button onClick={() => this.handleAdd(item.id)}>
                                +
                            </button>
                            <button
                                onClick={() => this.handleSubtract(item.id)}
                            >
                                -
                            </button>
                            <button onClick={() => this.handleRemove(item.id)}>
                                x
                            </button>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.price}€</p>
                    </li>
                )
            })
        ) : (
            <p>Your basket is empty.</p>
        )

        return (
            <div className="cart-container">
                <h2>Your Cart</h2>
                <ul className="cart-items">{addedItems}</ul>
                <hr />
                <div className="cart-footer">
                    <button className="clear-cart" onClick={() => this.handleClear()}>Clear Cart</button>
                    <p className="cart-total">{Math.round(this.props.total * 100) / 100} €</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: id => dispatch(removeFromCart(id)),
        incrementItem: id => dispatch(incrementItem(id)),
        decrementItem: id => dispatch(decrementItem(id)),
        clearCart: () => dispatch(clearCart())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart)
