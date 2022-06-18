import Item from './Item';
import ITarefa from '../../types/ITarefa';
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index}
                        {...item} />
                ))}
            </ul>
        </aside>);
}

export default Lista;