import * as React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor='inputTarefa'>
                        Adicione um novo estudo
                    </label>
                    <input type='text'
                        name='inputTarefa' id='inputTarefa'
                        placeholder='O que você quer estudar'
                        required />
                </div>
                <div>
                    <label htmlFor='inputTempo'>
                        Tempo
                    </label>
                    <input type='time' step='1'
                        name='inputTempo' id='inputTempo'
                        min='00:00:00' max='01:30:00'
                        required />
                </div>
                <Botao />
            </form>
        );
    }
}

export default Formulario;