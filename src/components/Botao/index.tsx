import { type } from 'os';
import * as React from 'react';
import style from './Botao.module.scss';

class Botao extends React.Component<{
    texto: string,
    tipo?: "button" | "submit" | "reset" | undefined
}> {
    render(): React.ReactNode {
        const { texto, tipo } = this.props;
        return (
            <button type={tipo} className={style.botao}>
                {texto}
            </button>
        );
    }
}

export default Botao;