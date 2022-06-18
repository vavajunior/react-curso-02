import * as React from 'react';
import ITarefa from '../../types/ITarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {

    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        this.props.setTarefas(lista =>
            [
                ...lista,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]);
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='inputTarefa'>
                        Adicione um novo estudo
                    </label>
                    <input type='text'
                        name='inputTarefa' id='inputTarefa'
                        value={this.state.tarefa}
                        onChange={e => this.setState({ ...this.state, tarefa: e.target.value })}
                        placeholder='O que você quer estudar'
                        required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='inputTempo'>
                        Tempo
                    </label>
                    <input type='time' step='1'
                        name='inputTempo' id='inputTempo'
                        value={this.state.tempo}
                        onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
                        min='00:00:00' max='01:30:00'
                        required />
                </div>
                <Botao texto='Adicionar' tipo='submit' />
            </form>
        );
    }
}

export default Formulario;