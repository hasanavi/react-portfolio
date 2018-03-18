import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<HomePage />
				</Layout>
			</div>
		);
	}
}

export default App;
