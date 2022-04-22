import * as React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='inputTarefa'>
                        Adicione um novo estudo
                    </label>
                    <input type='text'
                        name='inputTarefa' id='inputTarefa'
                        placeholder='O que você quer estudar'
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='inputTempo'>
                        Tempo
                    </label>
                    <input type='time' step='1'
                        name='inputTempo' id='inputTempo'
                        min='00:00:00' max='01:30:00'
                        required />
                </div>
                <Botao texto='Adicionar' />
            </form>
        );
    }
}

export default Formulario;