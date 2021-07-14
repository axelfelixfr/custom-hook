import { useEffect, useRef, useState } from 'react';
import fetch from 'cross-fetch';

export const useFetch = (url) => {
    // Hacemos uso del hook useRef
    const isMounted = useRef(true);

    // Usamos el useState para la petición fetch
    const [state, setState] = useState({data: null, loading: true, error:null});

    // Este useEffect es para saber cuando se desmonta el useFetch, para no encontrar errores al desmontar
    useEffect(() => {
        // Regresa el isMounted en false ya que ya fue desmontado
        return () => {
            isMounted.current = false;
        } 
    }, []); // Al mandar el arreglo vacío, significa que solo monta una vez

    useEffect(() => {

        // Antes de hacer la petición la carga esta en true, por si se hace más de una petición
        setState({ data: null, loading: true, error: null });

        // Hacemos la petición fetch
        fetch(url).then(resp => resp.json()).then(data => {

            // Si isMounted es igual a true, entonces que si haga el setState, si no puede es porque ya ha sido desmostada la función (el componente que la tiene)
            if(isMounted.current){

                // Se la pasa toda la data que se obtuvo y el loading se pasa a false
                setState({
                    loading: false,
                    error: null,
                    data
                });
                
            }

        }).catch(() => {
            setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info'
            });
        }); // El catch atraparía los errores en el fetch
    }, [url]); // El useEffect se ejecutara cada vez que cambie el url

    // Retornamos el state
    return state; 
}
