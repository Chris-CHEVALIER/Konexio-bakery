import React from 'react';
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import "./App.css";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			activeTab: "add",
			items: []
		}
	}

	handleButtonClick = (event) => {
		this.setState({
			activeTab: event.target.innerText
		});
	}

	addItem = (name, price) => {
		/*let products = this.state.items;
		products.push({name: name, price: price});
		this.setState({
			items: products
		});*/
		this.setState({
			items: [...this.state.items, {name: name, price: price}]
		});
	}

	removeItem = (item) => {
		/*let newItems = this.state.items;
		newItems.forEach(i => {
			if (item === i) {
				newItems.splice(newItems.indexOf(item), 1);
			}
		});
		this.setState({
			items: newItems
		});*/
		this.setState({
			items: this.state.items.filter(product => (
				product !== item
			))
		});
		localStorage.setItem("product", item.name);
	}

	render() {
		console.log(localStorage.getItem("product"));
		return(
			<>
				<h1>App</h1>
				<Button isSelected={this.state.activeTab === "add"} handleClick={this.handleButtonClick}>add</Button>
				<Button isSelected={this.state.activeTab === "list"} handleClick={this.handleButtonClick}>list</Button>
				<Button isSelected={this.state.activeTab === "pay"} handleClick={this.handleButtonClick}>pay</Button>
				{this.state.activeTab === "add" && (
					<Add addItem={this.addItem} />
				)}
				{this.state.activeTab === "list" && (
					<List items={this.state.items} removeItem={this.removeItem} />
				)}
				{this.state.activeTab === "pay" && (
					<Pay items={this.state.items} />
				)}
			</>
		)
	}
}