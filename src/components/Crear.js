import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeli] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();
        //conseguir datos del formulario
         let target = e.target;
         let titulo = target.titulo.value;
         let descripcion = target.descripcion.value

        //crear objeto de la pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        }
        //guardar estado
        setPeli(peli);

        //actualizar el estado del listado principal
        setListadoState(elementos => {
            return[...elementos,peli]
        })

       GuardarEnStorage("pelis",peli);
    
       //
    
    }


  return (
    <div className="add">
            <h3>{tituloComponente}</h3>
            <strong>
            {(titulo && descripcion) && "has creado la pelicula: "+titulo}
            </strong>
           
            <form onSubmit={conseguirDatosForm}>
                <input  type="text" 
                        id="titulo"
                        name="titulo"
                        placeholder="titulo"/>
                <textarea   id="descripcion"
                            name="descripcion"
                            placeholder="descripcion"></textarea>
                <input  type="submit"
                        id="save" 
                        value="guardar"/>
            </form>
        </div>
  )
}
