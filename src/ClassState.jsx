import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false
        }
    }

    /*UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }*/

    componentDidUpdate() {
        console.log('Actualizacion');

        if (this.state.loading) {
            setTimeout(() => {
                console.log("Haciendo validacion");

                this.setState({ loading: false });

                console.log("Terminando la validacion");
            }, 3000);
        }
    }

    render() {
        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>

                {this.state.error && (
                    <p>Error: el código es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                <input placeholder='Código de Seguridad' />
                <button
                    onClick={() => this.setState(prevState => ({ loading: !prevState.loading }))}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };