import React, { Component } from 'react';
import '../style/EasterEgg.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from 'reactstrap';

export default class FormularioEE extends Component {
    constructor() {
        super();
        this.state = {
            Juego: '',
            Titulo: '',
            Descripcion: ''
        };
        this.entradaEE = this.entradaEE.bind(this);
        this.salidaEE = this.salidaEE.bind(this);
    }
    entradaEE(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    salidaEE(e) {
        e.preventDefault();
        this.props.agregarEE(this.state)
    }
    state = {
        abierto: false,
    }
    abrirModal = () => {
        this.setState({ abierto: !this.state.abierto })
    }
    render() {
        return (
            <div className="Texto2">
                <div>
                    <Button onClick={this.abrirModal} className="Boton btn btn-outline-danger btn-dark">Agregar Publicacion</Button>
                </div>
                <Modal isOpen={this.state.abierto} className="bg-dark">
                    <ModalHeader className="bg-dark border-danger">
                        <h2 className="text-danger">Que EasterEgg quieres agregar?</h2>
                    </ModalHeader>
                    <form onSubmit={this.salidaEE}>
                        <ModalBody className="bg-dark border-danger">
                            <FormGroup>
                                <Label className="text-danger">Juego</Label>
                                <Input type="text" name="Juego" className="bg-dark text-danger border-danger" placeholder="Indique el juego" onChange={this.entradaEE} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-danger">Titulo</Label>
                                <Input type="text" name="Titulo" className="bg-dark text-danger border-danger" placeholder="Indique su titulo" onChange={this.entradaEE} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-danger">Descripcion</Label>
                                <Input type="text" name="Descripcion" className="bg-dark text-danger border-danger" placeholder="Describa lo descubierto" onChange={this.entradaEE} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter className="bg-dark border-danger">
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