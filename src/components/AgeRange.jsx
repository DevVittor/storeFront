import { Slider } from 'antd';
export default function AgeRange() {
    const formatter = (value) => `${value} anos`;
    return (
        <Slider
            min={18}
            defaultValue={18}
            max={70}
            styles={{
                track: {
                    background: 'var(--color-orange)'
                }
            }}
            tooltip={{
                open: true,
                formatter
            }}
        />
    )
}
