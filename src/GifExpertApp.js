import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']//Solo se usa una const como arreglo solo si el arreglo JAMAS va a cambiar en caso contrario usaremos un hook(useState)

    const [categories, setCategories] = useState(['Peppa Pig'])

    // REFERENCIA DE COMO LO HACIAMOS, AHORA VAMOS A HACERLO CON UN COMPONENTE
    // const handleAdd = () => {
    //     setCategories(() => [...categories,'Bob Toronja'])
    // }

    return (
        <div>
            <h2 className = "animate__animated animate__fadeIn">Nanowebs</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* REFERENCIA */}
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (//todo map tiene un indice implicito el cual lo podemos usar como KEY unica de cada elemento mapeado
            // /*RETURN EXPLICITO*/<li key={category}>{category}</li>//Necesitamos asigarle un Key Unico a cada elemento
                    <GifGrid 
                        category = {category}
                        key = {category}
                        />
                        
            ))
                }

            </ol>
        </div>
    )
}
