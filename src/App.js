import { Component } from 'react';
import Home from './pages/Home';
import Navvy from './components/Navvy';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from './pages/Blog';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Navvy />
				<BrowserRouter>
					<Route exact path='/' component={Home} />
					<Route path='/blog' component={Blog} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
