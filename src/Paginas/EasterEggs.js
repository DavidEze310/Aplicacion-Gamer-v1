import React, { Component } from 'react';
import FormularioEE from '../Componentes/Formulario/FormularioEE';
import '../Componentes/style/EasterEgg.css';
import { EjemplosEE } from '../Componentes/Ejemplos/EjemplosEE.json'
import { Link } from 'react-router-dom';

export default class EasterEggs extends Component {
    constructor() {
        super();
        this.state = {
            EjemplosEE
        };
        this.addEE = this.addEE.bind(this);
    }
    addEE(Ejemploee) {
        this.setState({
            EjemplosEE: [...this.state.EjemplosEE, Ejemploee]
        })
    }
    borrarEE(index) {
        if (window.confirm('Seguro que quieres borrar?')) {
            this.setState({
                EjemplosEE: this.state.EjemplosEE.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }
    render() {
        const EjemplosEE = this.state.EjemplosEE.map((Ejemploee, i) => {
            return (
                <div className=" col-md-12 mx-auto card bg-dark border-danger" key={i}>
                    <div className="card-header bg-dark ">
                        <h3 className="text-danger">Juego:</h3>
                        <h3 className="text-light">{Ejemploee.Juego}</h3>
                        <h4 className="text-danger">Titulo:</h4>
                        <h4 className="text-light">{Ejemploee.Titulo}</h4>
                    </div>
                    <div className="card-body bg-dark ">
                        <p className="text-danger">Descripcion:</p>
                        <p className="text-light">{Ejemploee.Descripcion}</p>
                    </div>
                    <div className="card-footer bg-dark">
                        <button className="btn btn-dark btn-outline-danger float-right" onClick={this.borrarEE.bind(this, i)}>
                            <i class="bi bi-circle" />Borrar
                        </button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="Texto2">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link to="/Publicaciones" className="Boton btn btn-dark btn-outline-danger"><i class="bi bi-triangle" /> Atras</Link>
                        <div className="container justify-content-center">
                            <h2 className="text-danger display-4">
                                EasterEggs
                            </h2>
                        </div>
                        <FormularioEE agregarEE={this.addEE} />
                    </nav>
                    <div className="progress">
                        <div className="progreso progress-bar bg-danger progress-bar-striped progress-bar-animated">
                        </div>
                    </div>
                </div>
                <div className="Texto3">
                    {EjemplosEE}
                </div>
            </div>
        )
    }
}