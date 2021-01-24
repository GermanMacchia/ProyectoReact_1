import React, {Component} from 'react';


class Peliculas extends Component {
	
	state = {
		peliculas: [
			{titulo: 'Batman vs Superman', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJQgkaSZQJT3Njc8c_dPFS6YM4X25BscsFA&usqp=CAU' },
			{titulo: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg'}
		],
		nombre: 'Victor Robles'
	}

	render(){
		return (
			<div id= "content" className="peliculas">

				<h2 className = "subheader">Peliculas</h2>
				<p> Seleccion de Peliculas Favoritas de {this.state.nombre}</p>
				<div id="articles">
				{
					this.state.peliculas.map((pelicula, i) =>{
						return (
							<article class="article-item" id="article-template">
								<div class="image-wrap">
									<img src={pelicula.image} alt= {pelicula.titulo} />
								</div>

								<h2>{pelicula.titulo}</h2>
								<span class="date">
									Hace 5 min
								</span>
								<a href="article.html">Leer más</a>
								<div class="clearfix"></div>
							</article>
						)
					})
				}
				</div>
			</div>
		);
	}
}

export default Peliculas;