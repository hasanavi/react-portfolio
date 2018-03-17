import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1 className="font-dosis">I AM A <span className="red">JAVASCRIPT</span> <span className="blue">ENTHUSIAST</span></h1>
				</Layout>
			</div>
		);
	}
}

export default App;
