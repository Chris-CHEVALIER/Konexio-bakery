import React, { Component } from 'react'
import Card from './Card';

export default class Pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0,
        }
    }

    handleSelect = (name, price) => {
        const { total, totalEcoTax, totalTTC, totalTVA, basket } = this.state;
        this.setState({
            basket: [...basket, {name: name, price: price}],
            total: total + parseFloat(price),
            totalEcoTax: totalEcoTax + 0.03,
            totalTVA: totalTVA + (price * 0.20),
            totalTTC: totalTTC + total + parseFloat(price) + totalEcoTax + 0.03 + totalTVA + (price * 0.20)
        });
    }

    render() {
        const { total, totalEcoTax, totalTTC, totalTVA } = this.state;
        return (
            <>
                <h1>Pay</h1>
                <div>
                    <p>Total : {total}</p>
                    <p>Total TVA : {totalTVA}</p>
                    <p>Total eco taxe : {totalEcoTax}</p>
                    <p>Total TTC : {totalTTC}</p>
                </div>
                {this.props.items.map(item => (
                    <Card  
                        key={item.name}
                        productName={item.name}
                        price={item.price}
                        onClick={() => this.handleSelect(item.name, item.price)}
                    />
                ))}
            </>
        )
    }
}
