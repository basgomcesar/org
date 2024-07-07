import { useContext, useState } from 'react';
import './MiOrg.css';

const MiOrg = (props)=>{
    return(
        <section className="orgSection">
            <h3 className='title'>Mi organizacion</h3>
            <img  src="/img/botonMas.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
    ); 
}

export default MiOrg;