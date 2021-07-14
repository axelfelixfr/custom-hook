import { useState } from 'react';

// Realizamos el hook useCounter
export const useCounter = (initialState = 10) => {
    // Ponemos como valor por defecto al inicializar, de 10 (aunque puede cambiar a la hora de llamarlo)

    const [counter, setCounter] = useState(initialState); // 10
    
    const increment = () => {
        // Al counter le suma 1 con la función setCounter
        setCounter(counter + 1);
    }

    const decrement = () => {
        // Al counter le resta 1 con la función setCounter
        setCounter(counter - 1);
    }
    
    /*
    EJEMPLOS PASANDOLE EL FACTOR:
    // Toma el factor que tiene por defecto 1
    const increment = (factor = 1) => {
        // Al counter le suma el factor con la función setCounter
        setCounter(counter + factor);
    }

    // Toma el factor que tiene por defecto 1
    const decrement = (factor = 1) => {
        // Al counter le resta el factor con la función setCounter
        setCounter(counter - factor);
    }
    */

    // Reset es para volver al valor del estado inicial
    const reset = () => {
        setCounter(initialState);
    }

    // Retornamos tanto el state como sus funciones
    return {
        counter,
        increment,
        decrement,
        reset
    }
}
