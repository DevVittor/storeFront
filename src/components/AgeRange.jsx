import { Slider } from 'antd';
import styles from './AgeRange.module.css';
export default function AgeRange() {
    return (
        <Slider
            min={18}
            defaultValue={18}
            max={70}
            classNames={styles.age}
            tooltip={{
                open: true,
            }}
        />
    )
}
