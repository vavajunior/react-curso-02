import ITarefa from '../../../types/ITarefa';
import style from './Item.module.scss';

interface IItemProps {
    item: ITarefa,
    selecionaTarefa: (item: ITarefa) => void
}

export default function Item({ item, selecionaTarefa }: IItemProps) {
    return (
        <li className={`${style.item} ${item.selecionado ? style.itemSelecionado : ''} ${item.completado ? style.itemCompletado : ''}`}
            onClick={() => !item.completado && selecionaTarefa(item)}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
            {item.completado &&
                <span className={style.concluido} aria-label='tarefa completada'></span>
            }
        </li>
    )
}