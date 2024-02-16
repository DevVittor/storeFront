import { Flex, Select } from 'antd';

export default function Cabelo() {

    const cabelos = [
        { value: 'Liso', label: 'Liso' },
        { value: 'Ondulado', label: 'Ondulado' },
        { value: 'Cacheado', label: 'Cacheado' },
        { value: 'Crespo', label: 'Crespo' },
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Tipos de cabelos"
                style={{
                    flex: 1,
                }}
                options={cabelos}
            />
        </Flex>
    )
}


