import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <>
                <h1>
                    List
                </h1>
                <ul>
                    {this.props.items.map(item => (
                        <li>
                            <b>Name: </b>{item.name}<br/>
                            <b>Price: </b>{item.price}<br/>
                            <button className="btn btn-danger" onClick={() => this.props.removeItem(item)}>
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}
