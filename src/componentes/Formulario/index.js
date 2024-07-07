import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { v4 as uuid } from "uuid"; 

const Formulario = (props) => {
  
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo,setEquipo] = useState("");
const [titulo,setTitulo] = useState("");
const [color,setColor] = useState("");
const registrarEquipo = props.crearEquipo ;

const manejarNuevoEquipo = (e) => {
  e.preventDefault();
  registrarEquipo({titulo,colorPrimario : color})
}

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
    let datosAEnviar = {
      id: uuid(),
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo, 
      fav:false
    };
    props.registrarColaborador(datosAEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}> 
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo 
          titulo="Nombre" 
          placeHolder="Ingresar nombre" 
          valor={nombre} 
          actualizarValor={setNombre} 
          required 
        />
        <Campo 
          titulo="Puesto" 
          placeHolder="Ingresar puesto" 
          valor={puesto} 
          actualizarValor={setPuesto} 
          required 
        />
        <Campo 
          titulo="Foto" 
          placeHolder="Ingresar enlace de foto" 
          valor={foto} 
          actualizarValor={setFoto} 
          required 
        />
        <ListaOpciones equipos={props.equipos} valor={equipo} actualizarEquipo={setEquipo}/>
        <Boton texto="Crear"/>
      </form>
      <form onSubmit={manejarNuevoEquipo}> 
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo 
          titulo="Titulo" 
          placeHolder="Ingresar el titulo" 
          valor={titulo} 
          actualizarValor={setTitulo} 
          required 
        />
        <Campo 
          titulo="Color" 
          placeHolder="Ingresar el color en Hex " 
          valor={color} 
          actualizarValor={setColor} 
          type="color"
          required 
        />
                <Boton texto="Registrar equipo"/>
        </form>
    </section>
  );
};

export default Formulario;
