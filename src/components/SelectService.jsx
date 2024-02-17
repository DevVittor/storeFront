import { Flex, Select } from 'antd';

export default function SelectService() {

    const services = [
        { value: 'Anal', label: 'Anal' },
        { value: 'Beijo na Boca', label: 'Beijo na Boca' },
        { value: 'Casal', label: 'Casal' },
        { value: 'Namoradinha', label: 'Namoradinha' },
        { value: 'Fantasias', label: 'Fantasias' },
        { value: 'Massagem erótica', label: 'Massagem erótica' },
        { value: 'Chuva Dourada', label: 'Chuva Dourada' },
        { value: 'Chuva Negra', label: 'Chuva Negra' },
        { value: 'Festas', label: 'Festas' },
        { value: 'Eventos', label: 'Eventos' },
        { value: 'Viagens', label: 'Viagens' },
        { value: 'Anal Giratório', label: 'Anal Giratório' }
    ];
    return (
        <Flex gap={8}>
            <Select
                mode="multiple"
                placeholder="Lista de serviços"
                style={{
                    flex: 1,
                }}
                options={services}
            />
        </Flex>
    )
}
