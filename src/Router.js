import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contador from './components/Contador';
import Peliculas from './components/Peliculas';
import Home from './components/Home';
import Error from './components/Error';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';

class Router extends Component {

	render(){

		return(

			<BrowserRouter> 

				<Header />
					
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/contador" component={Contador} />
						<Route exact path="/peliculas" component={Peliculas} />
						<Route exact path="/blog" component={Blog} />
						<Route exact path="/formulario" component={Formulario} />

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

	            	<div className="clearfix" />

            	<Footer />
			
			</BrowserRouter>
		);
	}
}

export default Router;