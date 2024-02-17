import { Flex, Select } from 'antd';

export default function Corpo() {

    const corpo = [
        { value: 'Magro', label: 'Magro' },
        { value: 'Normal', label: 'Normal' },
        { value: 'Sarado', label: 'Sarado' },
        { value: 'Musculoso', label: 'Musculoso' },
        { value: 'Gordinho', label: 'Gordinho' },
        { value: 'Gordo', label: 'Gordo' },
        { value: 'Extra GG', label: 'Extra GG' },
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Seu corpo é"
                style={{
                    flex: 1,
                }}
                options={corpo}
            />
        </Flex>
    )
}

