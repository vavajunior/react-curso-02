import { useEffect, useState } from "react";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/dateUtils";
import ITarefa from "../../types/ITarefa";

interface ICronometroProps {
    item: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ item, finalizarTarefa }: ICronometroProps) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        console.log('Cronometro (useEffect): ', item);
        if (item?.tempo)
            setTempo(tempoParaSegundos(item.tempo));
    }, [item]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao texto="Começar" onClick={() => regressiva(tempo)} />
        </div>
    );
}