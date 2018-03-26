import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Blog from './pages/Blog/Blog';
import Achievement from './pages/Achievement/Achievement';
import Contact from './pages/Contact/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Layout>
						<Route exact path="/" component={Home} />
						<Route path="/work" component={Work} />
						<Route path="/blog" component={Blog} />
						<Route path="/achievement" component={Achievement} />
						<Route path="/contact" component={Contact} />
					</Layout>
				</div>
			</Router>
		);
	}
}

export default App;
