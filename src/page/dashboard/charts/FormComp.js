import React from 'react';
import { Select, Typography, } from 'antd';
import { selectOption } from './dataDefinitions'; // Load select and checkbox options from external file
const { Title, Text } = Typography;

const FormComp = ({ onChangeSelect }) => (
  <div>
    <Title level={3}>Select Region</Title>
    <Text type="secondary">In order to see charts, please select your desired region.</Text>
    <br/>
    <Select
      style={{ width: 200, marginTop: '20px' }}
      showSearch
      optionFilterProp="children"
      onChange={onChangeSelect}
      options={selectOption}
    />
  </div>
);

export default FormComp;