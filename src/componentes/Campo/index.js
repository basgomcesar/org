import { useState } from 'react';
import './Campo.css';

const CampoTexto = (props) => {
    const manejarCambio = (evento) => {
        props.actualizarValor(evento.target.value);
    }
    const {type = "text"}  =props;

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeHolder+" ..."} 
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
            />
        </div>
    )
}

export default CampoTexto;