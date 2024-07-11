import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";
import { Analytics } from '@vercel/analytics/react';
import { v4 as uuid } from "uuid";


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
  ]);
  const [equipos, actualizarEquipos] = useState( [
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front-end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "Diseño UX",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log(colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  };
  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const colaboradoresFiltrados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
        console.log(  id);
    actualizarColaboradores(colaboradoresFiltrados);
  };
  //Actualizar color de equipo
  const actualizarColor = (color,id)=>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        return {...equipo, colorSecundario: color, colorPrimario: color}
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo
const crearEquipo = (nuevoEquipo)=>{
  actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
}
//Like
const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador)=>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      <Analytics/>
      {mostrarFormulario && (
        <Formulario
          equipos={equipos}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <div className="equipos">
        {equipos.map((equipo, index) => (
          <Equipo
            key={index}
            equipo={equipo}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
