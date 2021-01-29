import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';


/*	function recibirFormulario (e) {
		alert("formulario enviado");
		e.preventDefault();
	}  

LLAMADA COMO FUNCIÓN. 
1. DE ESTA MANERA SE LLAMA DIRECTO COMO PARAMETRO*/


class Formulario extends Component { //---------------------------------

 	nombreRef = React.createRef();
 	apellidoRef = React.createRef();
 	bioRef = React.createRef();
 	generoHombreRef = React.createRef();
 	generoMujerRef = React.createRef();
 	generoOtroRef = React.createRef();
 	/* metodo createRef es para asignar una referencia a un determinado valor 
 	(ver formulario). Genera un array de objeto donde hay que buscarlo por current.value*/
 	state = {
 		user: {}
 	};

 	/* Se crea un state de un JSON con un set vacio */

	recibirFormulario = (e) => {
		e.preventDefault();
		/*previene que se recargue la pagina, que es el comportamiento por default
		del submit */

		var genero;
		/* Esto se hizo porque hay 3 imputs para un solo dato*/

		if(this.generoHombreRef.current.checked){
			genero = this.generoHombreRef.current.value;
		} else if (this.generoMujerRef.current.checked){
			genero = this.generoMujerRef.current.value;
		} else {
			genero = this.generoOtroRef.current.value;
		}

		var user = {
			nombre: this.nombreRef.current.value,
			apellidos: this.apellidoRef.current.value,
			bio: this.bioRef.current.value,
			genero: genero
		}

		this.setState({
			user: user
		})

		console.log(user)
	}


/* LLAMADA COMO DIRECTA COMO METODO DE CLASE. 
Si utilizo el arrow function me ahorro de bindearlo.
2. DE ESTA MANERA SE LLAMA CON "THIS" ANTES DEL PARAMETRO*/


	render () {

		if(this.state.user.nombre){
			var user = this.state.user
		}
		//Se realiza para no tener que escribir this.state.user en *aca para ver*

		return(
			<div id="blog">
			{/*El componente Slider recibe props para una renderización especifica*/}
				<Slider
					title= "Formulario"
					size= "slider-small"
				/>

				<div className="center">
					<section id="content">

							<h1 className="subheader">Formulario</h1>

{/* aca para ver */}			{this.state.user.nombre &&
								<div id="user-data">
									<p>Nombre: <strong>{user.nombre}</strong> </p>
									<p>Apellido: <strong>{user.apellidos}</strong> </p>
									<p>Bio: <strong>{user.bio}</strong> </p>
									<p>Genero: <strong>{user.genero}</strong> </p>
								</div>
							}
								

							<form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
							{/* On submit lo hace cuando se manda. onChange locambia de forma inmediata y reactiva*/}
								<div className="form-group">
									<label htmlFor="nombre">Nombre</label>
									<input type="text" name="nombre" ref={this.nombreRef} />
								</div>

								<div className="htmlform-group">
									<label htmlFor="apellido">Apellido</label>
									<input type="text" name="nombre"  ref={this.apellidoRef} />
								</div>

								<div className="form-group">
									<label htmlFor="bio" >Biografía</label>
									<textarea name="bio" ref={this.bioRef}></textarea>
								</div>

								<div className="form-group radiobuttons">
									<input type="radio" name="genero" value="Hombre" ref={this.generoHombreRef} />Hombre 
									<input type="radio" name="genero" value="Mujer" ref={this.generoMujerRef} />Mujer 
									<input type="radio" name="genero" value="Otro" ref={this.generoOtroRef} />Otro
								</div>

								<div className="clearfix"></div>

								<input type="submit" value="Enviar" className= "btn btn-success" />

							</form>
					</section>
					<Sidebar 
						blog= "false"
					/>

				</div>
			</div>
		);
	}
}

export default Formulario;