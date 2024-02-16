import { Flex, Select } from 'antd';

export default function Generos() {

    const generos = [
        { value: 'Mulher', label: 'Mulher' },
        { value: 'Homem', label: 'Homem' },
        { value: 'Trans', label: 'Trans' },
    ];
    return (
        <Flex gap={8}>
            <Select
                placeholder="Gêneros"
                style={{
                    flex: 1,
                }}
                options={generos}
            />
        </Flex>
    )
}
