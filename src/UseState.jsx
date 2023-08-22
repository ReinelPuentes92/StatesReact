import React, { useEffect, useState } from 'react';

function UseState({ name }) {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Empezando el efecto");

        if (loading) {
            setTimeout(() => {
                console.log("Haciendo la validacion");
                setLoading(false);
                console.log("Terminando la validacion");
            }, 3000)    
        }

        console.log("Terminando el efecto");
    }, [loading])

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>

            {error && (
                <p>Error: El codigo es incorrecto</p>
            )}

            {loading && (
                <p>Cargando...</p>
            )}    

            <input placeholder='Código de Seguridad' />
            <button
                onClick={() => setLoading(!error)}
            >Comprobar</button>
        </div>
    );
}

export { UseState };