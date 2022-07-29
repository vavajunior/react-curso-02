import Item from './Item';
import ITarefa from '../../types/ITarefa';
import style from './Lista.module.scss';

interface IListaProps {
    tarefas: ITarefa[],
    selecionaTarefa: (item: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: IListaProps) {
    return (
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map(item => (
                    <Item key={item.id}
                        selecionaTarefa={selecionaTarefa}
                        item={item} />
                ))}
            </ul>
        </aside>);
}