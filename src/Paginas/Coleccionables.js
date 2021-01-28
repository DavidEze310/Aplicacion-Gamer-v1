import React, { Component } from 'react';
import FormularioCol from '../Componentes/Formulario/FormularioCol';
import '../Componentes/style/Coleccionables.css';
import { EjemplosCol } from '../Componentes/Ejemplos/EjemplosCol.json';
import { Link } from 'react-router-dom';

export default class Coleccionables extends Component {
    constructor() {
        super();
        this.state = {
            EjemplosCol
        };
        this.addCol = this.addCol.bind(this);
    }
    addCol(Ejemploscol) {
        this.setState({
            EjemplosCol: [...this.state.EjemplosCol, Ejemploscol]
        })
    }
    borrarCol(index) {
        if (window.confirm('Seguro que quieres borrar?')) {
            this.setState({
                EjemplosCol: this.state.EjemplosCol.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }
    render() {
        const EjemplosCol = this.state.EjemplosCol.map((Ejemploscol, i) => {
            return(
                <div className="col-md-12 mx-auto card bg-dark border-warning" kei={i}>
                    <div className="card-header bg-dark">
                        <h3 className="text-warning">Juego:</h3>
                        <h3 className="text-light">{Ejemploscol.Juego}</h3>
                        <h4 className="text-warning">Coleccionable:</h4>
                        <h4 className="text-light">{Ejemploscol.Coleccionable}</h4>
                    </div>
                    <div className="card-body bg-dark">
                        <p className="text-warning">Descripcion:</p>
                        <p className="text-light">{Ejemploscol.Descripcion}</p>
                    </div>
                    <div className="card-footer bg-dark">
                        <button className="btn btn-dark btn-outline-warning float-right" onClick={this.borrarCol.bind(this, i)}>
                            <i class="bi bi-circle" />Borrar
                        </button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className="Texto-Col">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link to="/Publicaciones" className="Boton-Col btn btn-dark btn-outline-warning"><i class="bi bi-triangle" /> Atras</Link>
                        <div className="container justify-content-center">
                            <h2 className="text-warning display-4">
                                Coleccionables
                            </h2>
                        </div>
                        <FormularioCol agregarCol={this.addCol}/>
                    </nav>
                    <div className="progress">
                        <div className="progreso progress-bar bg-warning progress-bar-striped progress-bar-animated">
                        </div>
                    </div>
                </div>
                <div className="Texto2-Col">
                    {EjemplosCol}
                </div>
            </div >
        )
    }
}