import React, {Component} from 'react';


class Pelicula extends Component {

	marcar = () => {
		this.props.marcarFavorita(this.props.pelicula);
	}


	render(){
		const {titulo, image} = this.props.pelicula; /* Recibe del componente Padre */

		return (
			<article className="article-item" id="article-template">
				<div className="image-wrap">
					<img src={image} alt= {titulo} />
				</div>

				<h2>{titulo}</h2>
				<span className="date">
					Hace 5 min
				</span>
				<a href="article.html">Leer más</a>
				<button onClick={this.marcar}> {/*Envía al componente Padre */}
					Marcar como favorita
				</button>
				<div className="clearfix"></div>
			</article>
		);
	}
}

export default Pelicula;