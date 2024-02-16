import { Flex, Select } from 'antd';

export default function Etnia() {

    const etnia = [
        { value: 'Branca', label: 'Branca' },
        { value: 'Preta', label: 'Preta' },
        { value: 'Morena', label: 'Morena' },
        { value: 'Parda', label: 'Parda' }
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Qual é sua Etnia"
                style={{
                    flex: 1,
                }}
                options={etnia}
            />
        </Flex>
    )
}


