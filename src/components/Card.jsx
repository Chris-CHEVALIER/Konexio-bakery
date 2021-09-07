import React, { Component } from 'react'

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            image: "./images/item.png"
        }
    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`)
        .then((res) =>
            res.blob()
        .then(result => {
            const path = URL.createObjectURL(result)
            this.setState({
                image: path
            })
        }));
    }

    render() {
        const { productName, price, onClick } = this.props;
        return (
            <div>
                <button onClick={() => onClick(productName, price)}>
                    <img src={this.state.image} alt="default" />
                </button>
                
            </div>
        )
    }
}