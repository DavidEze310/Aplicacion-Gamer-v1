import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PaginaInicial from'../Paginas/PaginaInicial';
import NotFound from '../Paginas/NotFound';
import EasterEggs from '../Paginas/EasterEggs';
import Trifurcacion from '../Paginas/Trifurcacion';
import Coleccionables from '../Paginas/Coleccionables';
import Consejos from '../Paginas/Consejos';

export default function Enlaces (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={PaginaInicial}/>
                <Route exact path="/Publicaciones" component={Trifurcacion}/>
                <Route exact path="/Publicaciones/EasterEggs" component={EasterEggs}/>
                <Route exact path="/Publicaciones/Coleccionables" component={Coleccionables}/>
                <Route exact path="/Publicaciones/Consejos" component={Consejos}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}