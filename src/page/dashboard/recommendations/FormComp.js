import React, {useState, useEffect} from 'react';
import { Select, Typography, Slider, Button, Popover } from 'antd';
import { selectOption,  } from './dataDefinitions'; // Load select and checkbox options from external file
import {
  ExclamationOutlined
 
} from '@ant-design/icons';
const { Title, Text } = Typography;


const FormComp = ({ onChangeSelect, region, handleApplyButtonClick }) => {

  const [sliderData, setSliderData] = useState([
    {value: 0, label: 'Access to Open Spaces and Recreation'},
    {value: 0, label: 'Proximity to Shopping Centers'},
    {value: 0, label: 'Availability of Institutional and Services'},
    {value: 0, label: 'Proximity to Important Public Spaces'},
    {value: 0, label: 'Utility Centers Accessibility'},
    {value: 0, label: 'Distance from Industrial Areas'}
    
  ]);

  // Function to handle changes from the DistancesSlider
  const handleSliderChange = (value, label) => {
   
    setSliderData(prevData => prevData.map(item => 
      item.label === label ? { ...item, value } : item
    ));

  }
  useEffect(() => {
    console.log("sliderData", sliderData);
  }, [sliderData]);
  
// Function to check if all slider values are 0
const allValuesZero = sliderData.every(item => item.value === 0);
return(
  
  <div>
    <Title level={3}>Select Region</Title>
    <Text type="secondary">In order to see the recommendations, please select your desired region.</Text>
    <br/>
    <Select
      style={{ width: 200, marginTop: '20px' }}
      showSearch
      optionFilterProp="children"
      onChange={onChangeSelect}
      options={selectOption}
    />
    {region  && (
      <>
        <Title level={3}>Select Distance</Title>
        <Text type="secondary">
            In our quest to enhance social welfare through thoughtful urban planning, we've established six key criteria for determining the optimal locations for residential developments. These criteria are used to define the ideal areas for residential placement, ensuring accessibility, convenience, and quality of life. Here’s how we evaluate potential residential sites:
        </Text>
          <div style={{marginTop:30}}>
        <DistancesSlider
          label={"Access to Open Spaces and Recreation"}
          contentInfo= {<p style={{width:200}} >Each residential area should be no less than <strong>350 meters (4-minutes walk)</strong> away from recreational facilities, ensuring ample open space for residents to enjoy.</p>}
         onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Access to Open Spaces and Recreation").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            350: {
            style: {
              color: '#50C878',
            },
            label: <strong>350m</strong>,
            },
          }}

        />

        <DistancesSlider
          label={"Proximity to Shopping Centers"}
          contentInfo= {<p style={{width:200}} > Shopping amenities should be conveniently located at least <strong>750 meters (10-minute walk)</strong> from residential areas to provide easy access without compromising the tranquility of the living space.</p>}
         onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Proximity to Shopping Centers").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            750: {
            style: {
              color: '#50C878',
            },
            label: <strong>750m</strong>,
            },
          }}
        />

        <DistancesSlider
          label={"Availability of Institutional and Services"}
          contentInfo= {<p style={{width:200}} > Essential services and institutional centers should be within <strong>2 km (25-minute walk)</strong> from residential areas, ensuring that key services are neither too far for comfort nor too close to disrupt the residential ambiance.</p>}
          onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Availability of Institutional and Services").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            2000: {
            style: {
              color: '#50C878',
            },
            label: <strong>2k</strong>,
            },
          }}
        />

        <DistancesSlider
          label={"Proximity to Important Public Spaces"}
          contentInfo= {<p style={{width:200}}> Major public spaces, which enhance community life and interaction, should be established within a radius of <strong>1100 meters (15-minute walk)</strong> from the residential site.</p>}
          onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Proximity to Important Public Spaces").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            1100: {
            style: {
              color: '#50C878',
            },
            label: <strong>1100m</strong>,
            },
          }}
        />

        <DistancesSlider
          label={"Utility Centers Accessibility"}
          contentInfo= {<p style={{width:200}}>Urban utility centers should be no further than <strong>650 meters (9-minutes walk)</strong> from residential areas, striking a balance between accessibility and maintaining residential peace.</p>}
          onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Utility Centers Accessibility").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            650: {
            style: {
              color: '#50C878',
            },
            label: <strong>650m</strong>,
            },
          }}
        />

        <DistancesSlider
          label={"Distance from Industrial Areas"}
          contentInfo= {<p style={{width:200}}>To ensure a healthy living environment, residential areas should be situated at least <strong>750 meters (10-minute walk)</strong> away from industrial zones. The greater the distance from industrial activities, the better the living quality.</p>}
          onChange= {handleSliderChange}
          value={sliderData.find(item => item.label === "Distance from Industrial Areas").value}
          marks = {{
            0: '0m',
            2500: '2500m',
            750: {
            style: {
              color: '#50C878',
            },
            label: <strong>750m</strong>,
            },
          }}
        />
       </div>
  
       <Button type="primary" onClick={handleApplyButtonClick} disabled={allValuesZero}>Apply</Button>
      </>
    )}
  </div>
)

function DistancesSlider({ label, contentInfo, marks,onChange, value }) {



 const handleOnChange = (newValue) => {
    console.log("New slider value", newValue);
    //setSliderValue(newValue);
    onChange(newValue, label);
  }
  
  return <div style={{ display:"flex"}}>
 
    <Text style={{width: '300px', paddingTop:"7px"}}  strong>{label}</Text>
    <Slider
      style={{ width: 400 }}
      min={1}
      max={2500}
      marks={marks}
      onChange={handleOnChange}
      value={value}
      />
    <Popover  placement="right" style={{width:50,}} content={contentInfo}>
        <Button type="primary" style={{ backgroundColor: "#eb2f96", marginLeft: "25px", }} icon={<ExclamationOutlined />} shape="circle" size={'small'} />
    </Popover> 
  
  </div>;
}}

export default FormComp;