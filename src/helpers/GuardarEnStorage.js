export const GuardarEnStorage = (clave,elemento) =>{

    //conseguir los elementos que tenemos en el localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    //comprobamos si es un array
    if(Array.isArray(elementos)){
        //guardar dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //crear un array con un nuevo elemento
        elementos = [elemento];
    }
    
   //Guardar en el localStorage
   localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto
    return elemento;
}