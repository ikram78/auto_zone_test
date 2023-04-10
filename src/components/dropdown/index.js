import { Select, Space } from 'antd';

const DropDown = ({onChangeDropDown,dropDownValues,loadingPlanet}) => (
  <Space wrap>
    <Select
      placeholder="Search planet name"
      onChange={onChangeDropDown}
      showSearch
      style={{
        width: 500,
      }}
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      loading={loadingPlanet}
      options={dropDownValues}
    />
   
  </Space>
);
export default DropDown;