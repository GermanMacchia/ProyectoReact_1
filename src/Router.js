import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contador from './components/Contador';
import Peliculas from './components/Peliculas';
import Inicio from './components/Inicio';
import Error from './components/Error';

class Router extends Component {

	render(){

		return(

			<BrowserRouter>

				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route exact path="/contador" component={Contador} />
					<Route exact path="/peliculas" component={Peliculas} />

					<Route exact path="/pagina1" render={()=> (
							<div id="content">
								<h1 className="subheader">Hola mundo desde la ruta pagina 1</h1>
								<h1> La ruta puede ser generada desde el mismo switch </h1>
							</div>
						)} 
					/>


					<Route exact path="/pruebas/:id/:nombre?" render={(props)=> {
								var id = props.match.params.id;
								var nombre = props.match.params.nombre;

								return (
									<div id="content">
										<h1 className="subheader">Hola mundo desde la página de pruebas</h1>
										<h1>El id ingresado es: {id}
											{
												nombre &&
												<span> {nombre}</span>
											}
										</h1>
									</div>
								);
							}
						} 
					/>

					<Route component={Error} />

				</Switch>
			
			</BrowserRouter>
		);
	}
}

export default Router;