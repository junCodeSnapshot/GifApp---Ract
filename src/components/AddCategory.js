import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputVal] = useState('')//Evitar errores hay que poner un string vacio '' si no queremos un string por defecto ya que sino sera undefined

    //Creamos una constante porque sera mas facil de ver de donde extraemos el valor del event

    const handleInputChange = (e) => {
        //Asi cambiamos el valor dentro de inputValue de 'Hola mundo'
        setinputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        // Evita que el form recargue todos los elementos de la pagina
        e.preventDefault();
        // console.log('Hecho!')//Comprobacion de que funciona el enter
        if (inputValue.trim().length > 2) {
            setCategories(cat => [inputValue,...cat]);
        }

    }

    return (
        // An HTML form is used to collect user input.
        // Quitamos el fragment <></> dado que solo estamos regresando UNA sola etiqueta
        // Tambien al usar el form nos recarga todos los elementos de la pagina lo cual es muy anticuado ya.
        <form onSubmit={handleSubmit}>
            <input
                type="text"//Buena practica espeficicar lo que va a contener el input
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
