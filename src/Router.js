import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contador from './components/Contador';
import Peliculas from './components/Peliculas';
import Inicio from './components/Inicio';

class Router extends Component {

	render(){

		return(

			<BrowserRouter>

				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route exact path="/contador" component={Contador} />
					<Route exact path="/peliculas" component={Peliculas} />


				</Switch>
			
			</BrowserRouter>
		);
	}
}

export default Router;