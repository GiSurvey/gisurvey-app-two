import React from 'react';
import { Select, Typography, Checkbox } from 'antd';
import { selectOption, checkboxOptions } from './dataDefinitions'; // Load select and checkbox options from external file
const { Title, Text } = Typography;

const FormComp = ({ onChangeSelect, onChangeCheckbox, region }) => (
  <div>
    <Title level={3}>Select Region</Title>
    <Text type="secondary">In order to see maps, please select your desired region.</Text>
    <br/>
    <Select
      style={{ width: 200, marginTop: '20px' }}
      showSearch
      optionFilterProp="children"
      onChange={onChangeSelect}
      options={selectOption}
    />
    {region && (
      <>
        <Title level={3}>Select Criteria</Title>
        <Text type="secondary">Please select your desired Criteria.</Text>
        <br/>
        <Checkbox.Group
          style={{ textAlign: 'center', marginTop: '20px' }}
          options={checkboxOptions}
          onChange={onChangeCheckbox}
        />
      </>
    )}
  </div>
);

export default FormComp;