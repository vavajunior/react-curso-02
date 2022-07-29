import style from './Botao.module.scss';

interface Props{
    texto: string,
    tipo?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

export default function Botao({ texto, tipo, onClick } : Props) {
    return (
        <button type={tipo} className={style.botao} onClick={onClick}>
            {texto}
        </button>
    );
}