import React,{Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from 'reactstrap';
import '../style/Coleccionables.css'

export default class FormularioCol extends Component {
    constructor(){
        super();
        this.state = {
            Juego:'',
            Coleccionable:'',
            Descripcion:'',
        };
        this.entradaCol = this.entradaCol.bind(this);
        this.salidaCol = this.salidaCol.bind(this);
    }
    entradaCol(e) {
        const{value, name} = e.target;
        this.setState({
            [name]: value
        })
    }
    salidaCol(e) {
        e.preventDefault();
        this.props.agregarCol(this.state)
    }
    state = {
        abierto: false,
    }
    abrirModal= () =>{
        this.setState({ abierto: !this.state.abierto })
    }
    render(){
        return(
            <div className="Texto-Col">
                <div>
                    <Button onClick={this.abrirModal} className="Boton-Col btn btn-outline-warning btn-dark">Agregar Publicacion</Button>
                </div>
                <Modal isOpen={this.state.abierto} className="bg-dark">
                    <ModalHeader className="bg-dark border-warning">
                        <h2 className="text-warning">Que Coleccionable quieres agregar?</h2>
                    </ModalHeader>
                    <form onSubmit={this.salidaCol}>
                        <ModalBody className="bg-dark border-warning">
                            <FormGroup>
                                <Label className="text-warning">Juego</Label>
                                <Input type="text" name="Juego" className="bg-dark text-warning border-warning" placeholder="Indique el juego" onChange={this.entradaCol} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-warning">Coleccionable</Label>
                                <Input type="text" name="Coleccionable" className="bg-dark text-warning border-warning" placeholder="Indique su coleccionable" onChange={this.entradaCol} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-warning">Descripcion</Label>
                                <Input type="text" name="Descripcion" className="bg-dark text-warning border-warning" placeholder="Describa los coleccionables" onChange={this.entradaCol} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter className="bg-dark border-warning">
                            <Button type="submit" onClick={this.abrirModal} className="btn-dark btn-outline-success">X Publicar</Button>
                            <Button onClick={this.abrirModal} className="btn-dark btn-outline-danger"><i class="bi bi-triangle" /> Atras</Button>
                            <p className="text-secondary float-none"><i class="bi bi-exclamation-triangle"/> Su publicacion aparecera debajo de las anteriores <i class="bi bi-exclamation-triangle"/></p>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        )
    }
}