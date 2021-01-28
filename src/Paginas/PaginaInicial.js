import React from 'react';
import '../Componentes/style/fondo.css';
import {Link} from 'react-router-dom';

export default function PaginaInicial () {
    return(
        <div className="Texto">
            <h1 className="text-danger font-italic">Comparte los Easter Eggs, coleccionables y consejos favoritos aquí</h1>
            <Link to="/Publicaciones" className="Boton1 btn btn-dark btn-outline-danger"><i class="bi bi-controller"/> Comencemos <i class="bi bi-controller"/></Link>
        </div>
    )
}