import { Flex, Select } from 'antd';

export default function SelectService() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate2', label: 'Chocolate' },
        { value: 'strawberry2', label: 'Strawberry' },
        { value: 'vanilla2', label: 'Vanilla' },
        { value: 'chocolate3', label: 'Chocolate' },
        { value: 'strawberry3', label: 'Strawberry' },
        { value: 'vanilla3', label: 'Vanilla' },
        { value: 'chocolate4', label: 'Chocolate' },
        { value: 'strawberry4', label: 'Strawberry' },
        { value: 'vanilla4', label: 'Vanilla' }
    ];
    return (
        <Flex gap={8}>
            <Select
                mode="multiple"
                placeholder="Lista de serviços"
                style={{
                    flex: 1,
                }}
                options={options}
            />
        </Flex>
    )
}
