import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
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

        if (this.state.loading) {
            setTimeout(() => {

                if (this.state.value === SECURITY_CODE) {
                    this.setState({ loading: false });    
                } else {
                    this.setState({ error: true });
                    this.setState({ loading: false });
                }
                

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

                <input 
                    placeholder='Código de Seguridad' 
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                />
                <button
                    onClick={() => {
                        this.setState({ loading: true });
                        this.setState({ error: false });
                    }}
                >Comprobar</button>
            </div>
        );
    }
}

export { ClassState };