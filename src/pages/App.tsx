import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import ITarefa from '../types/ITarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>();

  function selecionaTarefa(itemSelecionada: ITarefa) {
    let listaAtualizada = tarefas.map(item => ({
      ...item,
      selecionado: (item.id === itemSelecionada.id) ? true : false
    }));

    setTarefas(listaAtualizada);
    setTarefaSelecionada(listaAtualizada.find(i => i.selecionado));
  }

  function finalizarTarefa() {
    if (tarefaSelecionada) {
      setTarefaSelecionada(undefined);

      let listaAtualizada = tarefas.map(item => {
        if (item.id === tarefaSelecionada.id) {
          return {
            ...item,
            selecionado: false,
            completado: true
          };
        }
        return item;
      });
      setTarefas(listaAtualizada);
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} />
      <Cronometro
        item={tarefaSelecionada}
        finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;