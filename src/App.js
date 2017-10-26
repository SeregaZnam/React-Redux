import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';
import Menu from './Menu.js';

class App extends Component {
	submit() {
		console.log('submit', this.testInput.value);
	}

  	render() {
    return (
		<div>
			<Menu/>
			<input type="text" placeholder="test" ref={(input) => this.testInput = input}
			/>
			<button onClick={this.submit.bind(this)}>Submit</button>
		</div>
		);
  }
}

export default App;