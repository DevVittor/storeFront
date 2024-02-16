import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const UploadImages = () => (
    <Upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        listType="picture"
        maxCount="3"
        multiple="true"
        accept='image/png'
    >
        <Button icon={<UploadOutlined />}>Upload De Imagens</Button>
    </Upload>
);
export default UploadImages;