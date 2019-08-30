import React, { Component } from 'react'
import './styles/style.css'
import ItemsGrid from './ItemsGrid'
import ShoppingCart from './ShoppingCart'

class App extends Component {
    render() {
        return (
            <div className="app">
                <ItemsGrid />
                <ShoppingCart />
            </div>
        )
    }
}

export default App
