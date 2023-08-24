import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {

    const [state, setState] = useState({
        value: '',
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    });

    /*const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);*/

    const onWritte = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    };

    const onValidate = () => {
        setState({
            ...state,
            error: false,
            loading: true
        })
    };

    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            confirmed: true
        })
    };

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false
        })
    };

    const onReset = () => {
        setState({
            ...state,
            value: '',
            confirmed: false,
            deleted: false,
        })
    };

    const onDelete = () => {
        setState({
            ...state,
            deleted: true,                        
        })
    };

    useEffect(() => {

        if (state.loading) {
            setTimeout(() => {

                if (state.value === SECURITY_CODE) {
                    onConfirm();
                } else {
                    onError();
                }

            }, 3000)
        }

    }, [state.loading])

    if (!state.deleted && !state.confirmed) {
        return (
            <React.Fragment>
                <div>
                    <h2>Eliminar {name}</h2>
                    <p>Por favor, escribe el codigo de seguridad.</p>

                    {state.error && (
                        <p>Error: El codigo es incorrecto</p>
                    )}

                    {state.loading && (
                        <p>Cargando...</p>
                    )}

                    <input
                        placeholder='Código de Seguridad'
                        value={state.value}
                        onChange={(event) => {
                            onWritte(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            onValidate();
                        }}
                    >Comprobar</button>
                </div>
            </React.Fragment>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>Se requiere confirmación. ¿Estas Seguro?</p>
                <button
                    onClick={() => 
                        onDelete()
                    }
                >
                    Sí, elminar
                </button>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >
                    No, me arrepentí</button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con exito.</p>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }

}

export { UseState };