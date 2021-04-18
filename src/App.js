/** @format */

import React from 'react';
import './App.css';
import { Textbox } from './components/textBox/textbox.jsx';
import { List } from './components/list/list';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todo: [],
		};
	}

	//Remove todo

	handleOnClick = (index) => {
		this.setState((prevstate) => {
			return { todo: prevstate.todo.filter((element, i) => i !== index) };
		});
	};
	handleKeyPressFun = (e) => {
		console.log(e.key);
		if (e.key === 'Enter') {
			this.setState({
				todo: [e.target.value, ...this.state.todo],
			});
			e.target.value = '';
		}
	};
	render() {
		const styles = { float: `right`, cursor: `pointer` };
		return (
			<div id="container">
				<h1>
					To-Do List <i style={styles} className="fa fa-plus"></i>
				</h1>
				<Textbox handleKeyPress={this.handleKeyPressFun} />
				<List
					value={this.state.todo}
					handleOnClick={this.handleOnClick}
				/>
			</div>
		);
	}
}

export default App;
