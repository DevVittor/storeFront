import { useState } from 'react';
import styles from '../Peso/Peso.module.css';
export const Peso = () => {

    const [peso, setPeso] = useState("");

    const converterPeso = (e) => {
        const pesoValue = e.target.value;
        if (!isNaN(pesoValue)) {
            setPeso(pesoValue);
        }
    }

    return (
        <>
            <label htmlFor="" className={styles.title}>Peso</label>
            <input
                className={styles.peso}
                type="text"
                inputMode="numeric"
                required
                autoCorrect='off'
                min={30}
                max={250}
                value={peso}
                pattern="[0-9]*"
                name=""
                id=""
                placeholder="50Kg"
                onChange={converterPeso} />
        </>
    )
}