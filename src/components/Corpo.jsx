import { Flex, Select } from 'antd';

export default function Corpo() {

    const corpo = [
        { value: 'Magra', label: 'Magra' },
        { value: 'Normal', label: 'Normal' },
        { value: 'Sarado', label: 'Sarado' },
        { value: 'Musculoso', label: 'Musculoso' },
        { value: 'GG', label: 'GG' },
        { value: 'Extra GG', label: 'Extra GG' },
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Estilo do Corpo"
                style={{
                    flex: 1,
                }}
                options={corpo}
            />
        </Flex>
    )
}

