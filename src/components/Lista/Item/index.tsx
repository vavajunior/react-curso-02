import ITarefa from '../../../types/ITarefa';
import style from '../Lista.module.scss';

export default function Item(item: ITarefa) {
    return (
        <li className={style.item}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
        </li>
    )
}