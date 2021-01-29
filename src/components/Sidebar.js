import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
            	{this.props.blog === "true" &&
            		<div id="nav-blog" className="sidebar-item">
						<h3>Puedes hacer esto</h3>
						<a href="creararticulo.html" className="btn btn-success">Crear articulo</a>
					</div>
            	}


				<div id="search" className="sidebar-item">
					<h3>Buscador</h3>
					<h5>Encuentra el articulo que buscas</h5>
					<form>
						<input type="text" name="search" />
						<input type="submit" name="submit" value="Buscar" className="btn" />
					</form>
				</div>
			</aside>
        );
    }
}

export default Sidebar;