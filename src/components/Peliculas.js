import React, {Component} from 'react';
import Pelicula from './Pelicula'
import Slider from './Slider'
import Sidebar from './Sidebar'

class Peliculas extends Component {
	
	state = {
		peliculas: [
			{titulo: 'The Gentlemen', image: 'https://www.nacionflix.com/__export/1590172769922/sites/debate/img/2020/05/22/the-gentlemen-movie.jpg_1902800913.jpg' },
			{titulo: 'Gladiator', image: 'https://www.tvn.cl/incoming/rusell_crowe_gladiadorjpg-2733774/alternates/BASE_LANDSCAPE_SMALL/Rusell_Crowe_Gladiador.jpg'},
			{titulo: 'Kill Bill', image: 'https://static1.abc.es/media/play/2019/07/23/kill-bill-ka1C--620x349@abc.jpg'}
		],
		nombre: 'Germán Macchia',
		favorita: {}
	};


	cambiarTitulo = () => {

		var { peliculas } = this.state;
		peliculas[2].titulo = "Kill Bill II";

		this.setState({
			peliculas
		})
	}

	favorita = (pelicula) => {
		this.setState({
			favorita: pelicula
		});
	}



	render(){
		return (
			<>
			<Slider
				title= "Peliculas"
				size= "slider-small"
			/>
			<div className="center">
				<div id= "content" className="peliculas">

					<p> Seleccion de Peliculas Favoritas de {this.state.nombre}</p>
					<p><button onClick={this.cambiarTitulo}>Cambiar Titulo</button></p>

					{
						this.state.favorita.titulo &&
							<p className="favorita" style={{
								background: 'Green', 
								color: 'white',
								padding: '10px'
							}}>
								<strong>La pelicula favorita es: </strong>
								<span>{this.state.favorita.titulo}</span>
							</p> 
					}

					<div id="articles" className="Peliculas">

					{
						this.state.peliculas.map((pelicula, i) => {
							return (
								<Pelicula 
									key= {i} 
									pelicula= {pelicula}
									marcarFavorita= {this.favorita} 
								/>
							)
						})
					}
					</div>
				</div>
				<Sidebar 
					blog= "false"
				/>
			</div>

			</>
		);
	}
}

export default Peliculas;