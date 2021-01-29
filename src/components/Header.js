import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom'

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
									<NavLink to="/home" activeClassName="active">Inicio</NavLink>
								</li>
								<li>
									<NavLink to="/blog" activeClassName="active">Blog</NavLink>
								</li>
								<li>
									<NavLink to="/contador" activeClassName="active">Contador</NavLink>
								</li>
								<li>
									<NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
								</li>
								<li>
									<NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink>
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