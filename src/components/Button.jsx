import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
        <>
		    <button
                onClick={this.props.handleClick}
                className={`btn btn${this.props.isSelected ? "" : "-outline"}-primary m-2`}
            >
                {this.props.children}
            </button>
        </>
    )
  }
}