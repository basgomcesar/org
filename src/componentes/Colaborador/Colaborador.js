import "./Colaborador.css";
import { AiFillCloseCircle,AiFillHeart,AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {
    const {nombre,puesto,foto,id,fav} = props.datos;
    const {colorPrimario,eliminarColaborador,like} = props;
  return (
    <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>{eliminarColaborador(id)}}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt="Foto de perfil" />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() =>like(id)} className="like"/> : <AiOutlineHeart onClick={() => like(id)} className="dislike"/>}
            
            
        </div>
    </div>
  );
};

export default Colaborador;