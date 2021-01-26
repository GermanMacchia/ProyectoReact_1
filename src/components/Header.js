import React, {Component} from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {
	
	render(){

		return(
			<header id="header">
					<div className="center">
						{/* Logo */}
						<div id="logo">
							<img src={logo} alt="Logotipo" />
							<span id="brand">
								<strong>Curso</strong>React
							</span>
						</div>
						{/* Menu */}
						<nav id="menu">
							<ul>
								<li>
									<a href="/">Inicio</a>
								</li>
								<li>
									<a href="/contador">Contador</a>
								</li>
								<li>
									<a href="formulario.html">Formulario</a>
								</li>
								<li>
									<a href="/peliculas">Peliculas</a>
								</li>
							</ul>
						</nav>
						<div className="clearfix" />
					</div>	
				</header>
		);
	}
}

export default Header;