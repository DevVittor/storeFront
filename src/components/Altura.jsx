import { useState } from 'react';
import styles from './Altura.module.css';
export default function Altura() {
    const [heightValue, setHeightValue] = useState(170);
    function handleHeight(e) {
        const heightAtual = e.target.value;
        const convertHeight = (heightAtual / 100).toFixed(2);
        setHeightValue(convertHeight);
    }
    return (
        <div className={styles.modal_altura_acomp}>
            <label htmlFor="range_heigth_acomp">
                Altura: <span>{heightValue}M</span>
            </label>
            <input
                type="range"
                name="height"
                step={1}
                min={120}
                defaultValue={170}
                max={250}
                id="range_heigth_acomp"
                onChange={handleHeight}
            />
        </div>
    )
}
