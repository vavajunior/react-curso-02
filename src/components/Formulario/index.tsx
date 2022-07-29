import { useState } from 'react';
import ITarefa from '../../types/ITarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(lista =>
            [
                ...lista,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]);
        setTarefa("");
        setTempo("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='inputTarefa'>
                    Adicione um novo estudo
                </label>
                <input type='text'
                    name='inputTarefa' id='inputTarefa'
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    placeholder='O que você quer estudar'
                    required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='inputTempo'>
                    Tempo
                </label>
                <input type='time' step='1'
                    name='inputTempo' id='inputTempo'
                    value={tempo}
                    onChange={e => setTempo(e.target.value)}
                    min='00:00:00' max='01:30:00'
                    required />
            </div>
            <Botao texto='Adicionar' tipo='submit' />
        </form>
    );
}