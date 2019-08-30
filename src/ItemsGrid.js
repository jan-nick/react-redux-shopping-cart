import React, { Component } from 'react'
import itemData from './itemData'
import Product from './product.png'

const Item = props => {
    return (
        <div className="item">
            {/* Images are all the same for simplicity */}
            <img src={Product} alt="Product jar" />
            <div className="item-info">
                <h4>{props.item.name}</h4>
                <h4>{props.item.price} €</h4>
            </div>
        </div>
    )
}

export default class ItemsGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: itemData
        }
    }

    itemListTable = () => {
        return this.state.items.map((currentItem, i) => {
            return <Item item={currentItem} key={i} />
        })
    }

    render() {
        return <div className="item-container">{this.itemListTable()}</div>
    }
}
