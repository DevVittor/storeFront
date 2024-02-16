import { Cascader } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const Tons = () => (
    <Cascader
        options={[
            {
                label: 'Tipo',
                value: 'Tipo',
                children: [
                    {
                        label: 'Liso',
                        value: 'Liso',
                    },
                    {
                        label: 'Ondulado',
                        value: 'Ondulado',
                    },
                    {
                        label: 'Cacheado',
                        value: 'Cacheado',
                    },
                    {
                        label: 'Crespo',
                        value: 'Crespo',
                    },
                ],
            },
            {
                label: 'Tamanho',
                value: 'Tamanho',
                children: [
                    {
                        label: 'Raspado',
                        value: 'Raspado',
                    },
                    {
                        label: 'Curto',
                        value: 'Curto',
                    },
                    {
                        label: 'Médio',
                        value: 'Médio',
                    },
                    {
                        label: 'Longo',
                        value: 'Longo',
                    },
                    {
                        label: 'Volumoso',
                        value: 'Volumoso',
                    },
                ],
            },
            {
                label: 'Cor',
                value: 'Cor',
                children: [
                    {
                        label: 'Preto',
                        value: 'Preto',
                    },
                    {
                        label: 'Cartanho',
                        value: 'Cartanho',
                    },
                    {
                        label: 'Loiro',
                        value: 'Loiro',
                    },
                    {
                        label: 'Grisalho',
                        value: 'Grisalho',
                    },
                    {
                        label: 'Colorido',
                        value: 'Colorido',
                    },
                ],
            },
        ]}
        onChange={handleChange}
        placeholder="Cabelo"
    />
);

export default Tons;
