import React, { useReducer, useEffect } from 'react';

const SECURITY_CODE = 'paradigma';

function UseStateReducer({ name }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    //Action Creators
    const onConfirm = () => {
        dispatch({type: actionTypes.confirm});  
    }; 
    const onCheck = () => {
        dispatch({type: actionTypes.check});
    };
    const onReset = () => {
        dispatch({type: actionTypes.reset});
    };
    const onDelete = () => {
        dispatch({type: actionTypes.delete});
    };
    const onError = () => {
        dispatch({type: actionTypes.error});
    };

    const onWritte = (newValue) => { 
        dispatch({type: actionTypes.writte, payload: newValue}) 
    };

    useEffect(() => {

        if (state.loading) {
            setTimeout(() => {

                if (state.value === SECURITY_CODE) {
                    //dispatch({ type: actionTypes.confirm });
                    onConfirm();
                } else {
                    //dispatch({ type: actionTypes.error });
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
                            /*dispatch({
                                type: actionTypes.writte,
                                payload: event.target.value,
                            });*/
                            onWritte(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            //dispatch({type: actionTypes.check});
                            onCheck();
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
                    onClick={() => {
                        //dispatch({type: actionTypes.delete});
                        onDelete();
                    }}
                >
                    Sí, elminar
                </button>
                <button
                    onClick={() => {
                        //dispatch({type: actionTypes.reset});
                        onReset();
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
                        //dispatch({type: actionTypes.reset});
                        onReset();
                    }}
                >
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }

}

// initialState
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

//Action Types
const actionTypes = {
    confirm: 'CONFIRM',
    check: 'CHECK',
    writte: 'WRITTE',
    reset: 'RESET',
    delete: 'DELETE',
    error: 'ERROR'
};

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.confirm:
            return {
                ...state,
                loading: false,
                confirmed: true,
            };
        case actionTypes.check:
            return {
                ...state,
                error: false,
                loading: true,
            };
        case actionTypes.writte:
            return {
                ...state,
                value: action.payload,
            };
        case actionTypes.reset:
            return {
                ...state,
                value: '',
                confirmed: false,
                deleted: false,
            };
        case actionTypes.delete:
            return {
                ...state,
                deleted: true,
            }
        case actionTypes.error:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
};

export { UseStateReducer };
