import React, {Component} from 'react';
import FormularioCon from '../Componentes/Formulario/FormularioCon';
import '../Componentes/style/Consejos.css';
import {EjemplosCon} from '../Componentes/Ejemplos/EjemplosCon.json';
import {Link} from 'react-router-dom';

export default class Consejos extends Component{
    constructor(){
        super();
        this.state = {
            EjemplosCon
        };
        this.addCon = this.addCon.bind(this);
    }
    addCon(Ejemploscon) {
        this.setState({
            EjemplosCon:[...this.state.EjemplosCon, Ejemploscon]
        })
    }
    borrarCon(index) {
        if (window.confirm('Seguro que quieres borrar?')) {
            this.setState({
                EjemplosCon: this.state.EjemplosCon.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }
    render(){
        const EjemplosCon = this.state.EjemplosCon.map((Ejemploscon, i) => {
            return (
                <div className=" col-md-12 mx-auto card bg-dark border-info" key={i}>
                    <div className="card-header bg-dark ">
                        <h3 className="text-info">Juego:</h3>
                        <h3 className="text-light">{Ejemploscon.Juego}</h3>
                        <h4 className="text-info">Titulo:</h4>
                        <h4 className="text-light">{Ejemploscon.Titulo}</h4>
                        <h4 className="text-info">Tipo:</h4>
                        <h4 className="text-light">{Ejemploscon.Tipo}</h4>
                    </div>
                    <div className="card-body bg-dark ">
                        <p className="text-info">Descripcion:</p>
                        <p className="text-light">{Ejemploscon.Descripcion}</p>
                    </div>
                    <div className="card-footer bg-dark">
                        <button className="btn btn-dark btn-outline-info float-right" onClick={this.borrarCon.bind(this, i)}>
                            <i class="bi bi-circle" />Borrar
                        </button>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <div className="Texto-Con">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <Link to="/Publicaciones" className="Boton-Con btn btn-dark btn-outline-info"><i class="bi bi-triangle" /> Atras</Link>
                        <div className="container justify-content-center">
                            <h2 className="text-info display-4">
                                Consejos
                            </h2>
                        </div>
                        <FormularioCon agregarCon={this.addCon}/>
                    </nav>
                    <div className="progress">
                        <div className="progreso progress-bar bg-info progress-bar-striped progress-bar-animated">
                        </div>
                    </div>
                </div>
                <div className="Texto2-Con">
                    {EjemplosCon}
                </div>
            </div>
        )
    }
}