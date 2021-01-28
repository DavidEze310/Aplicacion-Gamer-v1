import React,{Component} from 'react';
import'../style/Consejos.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Input, Label } from 'reactstrap';

export default class FormularioCon extends Component{
    constructor(){
        super();
        this.state={
            Juego:'',
            Titulo:'',
            Tipo:'',
            Descripcion:''
        };
        this.entradaCon = this.entradaCon.bind(this);
        this.salidaCon = this.salidaCon.bind(this);
    }
    entradaCon(e){
        const{value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    salidaCon(e){
        e.preventDefault();
        this.props.agregarCon(this.state)
    }
    state ={
        abierto: false,
    }
    abrirModal= () =>{
        this.setState({ abierto: !this.state.abierto })
    }
    render(){
        return(
            <div className="Texto-Con">
                <div>
                    <Button onClick={this.abrirModal} className="Boton-Con btn btn-outline-info btn-dark">Agregar Publicacion</Button>
                </div>
                <Modal isOpen={this.state.abierto} className="bg-dark">
                    <ModalHeader className="bg-dark border-info">
                        <h2 className="text-info">Que Consejo quieres agregar?</h2>
                    </ModalHeader>
                    <form onSubmit={this.salidaCon}>
                        <ModalBody className="bg-dark border-info">
                            <FormGroup>
                                <Label className="text-info">Juego</Label>
                                <Input type="text" name="Juego" className="bg-dark text-info border-info" placeholder="Indique el juego" onChange={this.entradaCon} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-info">Titulo</Label>
                                <Input type="text" name="Titulo" className="bg-dark text-info border-info" placeholder="Indique su Titulo" onChange={this.entradaCon} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-info">Tipo de consejo</Label>
                                <Input type="text" name="Tipo" className="bg-dark text-info border-info" placeholder="Indique en que se basa" onChange={this.entradaCon} />
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-info">Descripcion</Label>
                                <Input type="text" name="Descripcion" className="bg-dark text-info border-info" placeholder="Describa el consejo" onChange={this.entradaCon} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter className="bg-dark border-info">
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