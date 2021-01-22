import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import ChimiBuilder from './containers/ChimiBuilder/ChimiBuilder';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<ChimiBuilder />
				</Layout>
			</div>
		);
	}
}

export default App;
