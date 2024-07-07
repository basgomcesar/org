import './ListaOpciones.css';

const ListaOpciones = (props) => {

    //Utilizamos map para recorrer el array y mostrar cada uno de los elementos en la lista desplegable
    //ejemplo
    // metodo map -> arreglo.map((elemento, index) => {return <option key={index}>{elemento}</option>})

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={(e)=> props.actualizarEquipo(e.target.value)} >
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => {
            return <option key={index} value={equipo.titulo}>{equipo.titulo}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaOpciones;
