import { Flex, Select } from 'antd';

export default function CorOlhos() {

    const cores = [
        { value: 'Preto', label: 'Preto' },
        { value: 'Castanho', label: 'Castanho' },
        { value: 'Azul', label: 'Azul' },
        { value: 'Verde', label: 'Verde' },
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Cor dos Olhos"
                style={{
                    flex: 1,
                }}
                options={cores}
            />
        </Flex>
    )
}
