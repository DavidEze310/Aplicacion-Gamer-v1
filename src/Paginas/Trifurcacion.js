import React from 'react';
import '../Componentes/style/Trifurcacion.css';
import { Link } from 'react-router-dom';

export default function Trifurcacion() {
    return (
        <div className="Texto4">
            <h1 className="text-danger display-2 Titulo">Bienvenido Gamer</h1>
            <h1 className="text-danger Titulo">Que quieres agregar el dia de hoy?</h1>
            <div className="container px-4 mt-5 ">
                <div className="row gx-5">
                    <div className="col EasterEgg card bg-dark">
                        <div className=" card-header bg-dark text-danger">
                            <h4>EasterEggs</h4>
                        </div>
                        <div className="card-body bg-dark text-danger">
                            <p>Encuentra informacion sobre los EasterEggs mas populares.</p>
                            <p>Comparte tus hallazgos con la comunidad</p>
                        </div>
                        <div className="card-footer bg-dark">
                            <Link to="/Publicaciones/EasterEggs" className="btn btn-dark btn-outline-danger EasterEgg">
                                X Seleccionar
                            </Link>
                        </div>
                    </div>
                    <div className="col Coleccionable card bg-dark">
                        <div className=" card-header bg-dark text-warning">
                            <h4>Coleccionables</h4>
                        </div>
                        <div className="card-body bg-dark text-warning">
                            <p>Si no encontras el coleccionable que te falta, llegaste al lugar indicado</p>
                            <p>Tu pasiencia es admirable y los anciosos necesitan tu ayuda, si encontraste todo, compartilo</p>
                        </div>
                        <div className="card-footer bg-dark">
                            <Link to="/Publicaciones/Coleccionables" className="btn btn-dark btn-outline-warning Coleccionable">
                                X Seleccionar
                            </Link>
                        </div>
                    </div>
                    <div className="col Consejo card bg-dark">
                        <div className=" card-header bg-dark text-info">
                            <h4>Consejos</h4>
                        </div>
                        <div className="card-body bg-dark text-info">
                            <p>Halla la mejor manera de superar esa misión tan dificil</p>
                            <p>Ayuda a otros jugadores sugiriendo diferentes tecnicas, equipamiento, modificaciones y más</p>
                        </div>
                        <div className="card-footer bg-dark">
                            <Link to="/Publicaciones/Consejos" className="btn btn-dark btn-outline-info Consejo">
                                X Seleccionar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}