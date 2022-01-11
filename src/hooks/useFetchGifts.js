//use indica que es un hook

import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

//no hay que importar react ya que no vamos a regresar JSX
export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: null
    });

    

    useEffect(() => {
        setState({
            ...state, loading:true
        })
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 1000);

            })// tambien puede ser .then(setImages) dado que el argumento es mandado como el primer elemento
    }, [category])//Solo sera renderizado por primera e unica vez


    // setTimeout( () => {
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // },3000);

    return state; //{data[], loading:true}

}