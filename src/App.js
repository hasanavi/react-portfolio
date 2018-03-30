import React, { Component } from 'react';
import Analytics from 'react-router-ga';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Blog from './pages/Blog/Blog';
import Achievement from './pages/Achievement/Achievement';
import Contact from './pages/Contact/Contact';

import './App.css';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Analytics id="UA-50211530-1">
						<Layout>
							<Route exact path="/" component={Home} />
							<Route path="/work" component={Work} />
							<Route path="/blog" component={Blog} />
							<Route path="/achievement" component={Achievement} />
							<Route path="/contact" component={Contact} />
						</Layout>
					</Analytics>
				</Router>
			</div>
		);
	}
}

export default App;
