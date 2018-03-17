import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1 className="font-dosis">I AM A <span className="red">JAVASCRIPT</span> <span className="blue">ENTHUSIAST</span></h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus, nisi vel feugiat dictum, libero libero efficitur nulla, non dictum odio turpis faucibus est. Sed tristique tempus leo eget vestibulum. Maecenas at hendrerit tortor. Fusce scelerisque orci sit amet diam posuere malesuada. Sed leo ipsum, ornare non nulla eget, consectetur dapibus arcu. Donec ornare suscipit sem. Fusce pharetra eu leo non auctor. Praesent et metus arcu. Pellentesque in lacus aliquet enim semper venenatis. Curabitur sagittis ligula quis sapien condimentum dignissim. Duis condimentum mauris enim, sit amet iaculis tortor fringilla sed. Suspendisse potenti. Fusce auctor porttitor eros, ac volutpat velit malesuada a.
					</p>
				</Layout>
			</div>
		);
	}
}

export default App;
