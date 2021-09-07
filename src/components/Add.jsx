import React, { Component } from 'react'

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            price: 0
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        });
    }

    render() {
        return (
            <>
                <h1>
                    Add
                </h1>
                <input onChange={this.handleNameChange} type="text" name="name" id="name" />
                <input onChange={this.handlePriceChange} type="range" name="price" id="price" step={0.1} min={1} max={10} />
                <span>{this.state.price}</span>
                <button onClick={() => this.props.addItem(this.state.name, this.state.price)}>add</button>
            </>
        )
    }
}
