import { useState } from 'react';
import styles from './Altura.module.css';
export const Altura = () => {
    const [altura, setAltura] = useState(null);
    const [error, setError] = useState("");
    console.log(altura, typeof (altura));

    const converterAltura = (e) => {
        const alturaValue = e.target.value;
        if (alturaValue <= 230) {
            setAltura(parseInt(alturaValue));
            setError("");
        }
    };

    return (
        <div className={styles.modal_altura_acomp}>
            <label htmlFor="" className={styles.title}>Altura</label>
            <input
                className={styles.altura}
                type="text"
                inputMode='numeric'
                required
                autoCorrect='off'
                pattern="[0-9]*"
                placeholder='1.75M'
                value={altura || ""}
                onChange={converterAltura}
            />
            {error && <span>{error}</span>}
        </div>
    )
}