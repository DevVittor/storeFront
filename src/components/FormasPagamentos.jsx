
import { Flex, Select } from 'antd';

export default function FormasPagamentos() {

    const formas = [
        { value: 'Dinheiro', label: 'Dinheiro' },
        { value: 'Pix', label: 'Pix' },
        { value: 'Cartão de crédito', label: 'Cartão de crédito' },
        { value: 'Cartão de débito', label: 'Cartão de débito' },
        { value: 'Transferência bancária', label: 'Transferência bancária' },
        { value: 'Cheque', label: 'Cheque' },
    ];
    return (
        <Flex gap={8}>
            <Select
                mode="multiple"
                placeholder="Formas de pagamentos aceitas"
                style={{
                    flex: 1,
                }}
                options={formas}
            />
        </Flex>
    )
}

