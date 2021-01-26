import React, {Component} from 'react';


class Contador extends Component{


    constructor(){
        super();

        this.state = {
            contador: 0
        };
    }

    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

	render(){

		return(
		    <section id="content">
                <h2 className="subheader">Estado</h2>

                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="sumar" onClick={this.sumar} />
                    <input type="button" value="restar" onClick={this.restar} />
                </p>

            </section>
		);
	}
}

export default Contador;