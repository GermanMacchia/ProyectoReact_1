import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
	
	render () {

		return(
			<div>
				<Slider
				title= "Bienvenidos al Proyecto React 1!"
				btn= "Ir al Blog" 
				size= "slider-big"
				/>

				<div className="center">
					<section id="content">
						<h1>Hola este es el componente de inicio</h1>
					</section>
					<Sidebar />

				</div>
			</div>
		);
	}
}

export default Home;