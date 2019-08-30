import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import Product from '../product.png'

class ItemsGrid extends Component {
    handleClick = id => {
        this.props.addToCart(id)
    }

    render() {
        let itemListTable = this.props.items.map(item => {
            return (
                <div
                    className="item"
                    key={item.id}
                    onClick={() => this.handleClick(item.id)}
                >
                    {/* Images are all the same for simplicity */}
                    <img src={Product} alt={item.name} />
                    <div className="item-info">
                        <h4>{item.name}</h4>
                        <h4>{item.price} €</h4>
                    </div>
                </div>
            )
        })

        return <div className="item-container">{itemListTable}</div>
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsGrid)
