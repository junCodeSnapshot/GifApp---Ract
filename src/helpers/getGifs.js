export const getGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=lu5l27yS2utR27Smt5UPNPrwjX7m1Ppx`
    const resp = await fetch(url);//Fetch es la respuesta de una funcion async con la info del api
    //usamos desestructuracion de la data para solo obtener los arreglos con las imagenes
    const {data} = await resp.json();//Transforma la info del fetch a text o json format
    const gifs = data.map ( img => {
        return{
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url,//El signo de ? es para validar que el arreglo tenga la propiedad de images
        }
    })


    // console.log(gifs);

    return gifs;
}
