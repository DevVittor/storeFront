import { InputNumber, Space } from 'antd';
const onChange = (value) => {
    console.log('changed', value);
};
const Cache = () => (
    <Space>
        <InputNumber
            defaultValue={100}
            formatter={(value) => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            onChange={onChange}
        />
    </Space>
);
export default Cache;
