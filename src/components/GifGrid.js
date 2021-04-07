import React from 'react'//RAFC para crear un componente facil
import { useFetchGifs } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';
//El useEfect nos permitira ejecutar ciertas parte del codigo de manera condicional


export const GifGrid = ({category}) => {


    const {data:images,loading} = useFetchGifs(category);//renombramos el data ya que realmente carga images no datos

    // console.log(loading);



    // const [images, setImages] = useState([])

    // // const [count, setCount] = useState(0); Lo usamos para hacer pruebas de las peticiones http






    // getGifs();

    return (
        <>
        <h3 className = "animate__animated animate__fadeInDown">{category}</h3>

        {/* {loading ? 'Cargando...' : 'Data Cargada'} */}
        {loading && <p className = "animate__animated animate__flash">Loading</p>  } {/*No evaluaremos el caso de False*/}
        <div className="card-grid">
            {/* Lo usamos para hacer pruebas HTTP */}
            {/* <h3>{count}</h3>{/*Al hacer esta validacion vemos que React esta volviendo hacer la peticion http a la api porque detecto un cambio y hay que actualizar las referemcias */}
            {/* <button onClick = {() => setCount (count + 1)}></button> */}
            {/* CREAREMOS UN NUEVO COMPONENTE PARA ... */}
            {/* { <ol> 
                {
                    images.map( ({id,title}) => 
                        (<li key = {id}>{title}</li>)//Las llaves en el li es para indicar un return explicito()
                    )
                }
            </ol>  */}

                {
                    images.map( img =>( <GifGridItem 
                        key = {img.id}
                        {...img}//usaremos el spread para poder hacer desestructuracion en GifGridItem de cada una de las propiedades ya que hemos pasado cada una como propiedad individual
                        />
                    ))
                }
        </div> 
        </>
    )
}
