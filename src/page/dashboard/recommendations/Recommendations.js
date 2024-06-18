import React, { useState, useEffect , useRef } from 'react'
import { Table, Tag, Space, Result, Button, Select , Flex, Spin} from 'antd';
import CustomModal from "../CustomModal.js"
import images from '../../../assats/image/index.js'
import { BarsOutlined } from '@ant-design/icons';
import {
  InsertRowAboveOutlined
} from '@ant-design/icons';
import FormComp from './FormComp.js'
const EXCELLENT = "#87d068"
const MODERATE = "#FFBF00"
const LOW = '#f50'

const selectOption  =[
  {
    value: 'ajax',
    label: 'Ajax',
    disabled: true,
  },
  {
    value: 'brock',
    label: 'Brock',
    disabled: true,
  },
  {
    value: 'clarington',
    label: 'Clarington',
    disabled: true,
  },
  {
    value: 'oshawa',
    label: 'Oshawa',

  },
  {
    value: 'pickering',
    label: 'Pickering',
    disabled: true,
  },
  {
    value: 'scugog',
    label: 'Scugog',
    disabled: true,
  },
  {
    value: 'uxbridge',
    label: 'Uxbridge',
    disabled: true,
  },
  {
    value: 'whitby',
    label: 'Whitby',
    disabled: true,
  },
]

const dataSource = [
  {
    key: '1',
    alternatives: 'Alternative 1',
    shape_size: images.a1_map2,
    plot_area: '14.2',
    land_use_status: "barren",
    land_use: "Residential",
    residential_units : "200 villas (500 square meters)",
    capacity: "800 people",
    services: "Excellent",
    capability: "Excellent",
    scoring: "86",
    map1: images.a1_map1 ,
    map2: images.a1_map2,
    description: `Alternative 1 is a 14.2-hectare plot in the eastern part of Oshawa. It is the largest of the five selected plots, bounded by Eldorado Street to the north, Townline Street to the east, Shankel Street to the south, and Clarence Biesenthal Street to the west. The plot’s shape and flat surface make it suitable for design and development, and it has good accessibility from Townline and Shankel streets.

    The plot is identified as residential in the urban development plan. Its surrounding area features essential services like Buena Vista Hall, A. E. King Fitness Center, College Park Elementary School, and shopping centers around King Street. The residential texture around the plot also ensures compatibility with future planning.
    
    Given its size, the plot can accommodate about 200 residential plots in the form of villas with a mean area of 500 square meters each, potentially housing 800 people with an average household size of four. However, this capacity could change if a different planning approach is adopted or if additional service land uses are introduced on the same plot.
    
    The plot's advantages include its large size, good shape, flat surface, and accessibility to essential services, which make it a viable location for residential development. The primary disadvantage is its distance from the center of Oshawa, although the proximity to essential services and a neighboring city mitigates this concern.
    `
  },
  {
    key: '2',
    alternatives: 'Alternative 2',
    shape_size: images.a2_map2,
    plot_area: '5.2',
    land_use_status: "Open space",
    land_use: "Residential",
    residential_units : "45 villas (500 square meters) or 56 two-story residential units",
    capacity: "180 people 450 people",
    services: "Excellent",
    capability: "Moderate",
    scoring: "63",
    map1: images.a2_map1 ,
    map2: images.a2_map2,
    description: `Alternative 2 is a 5.2-hectare plot in Oshawa, with Taylor Street to the north, Harmony Street to the east, Olive Street to the south, and Linden Street to the west. The main accesses are via Taylor and Harmony Streets. The plot has a proportional rectangular shape, but its east and northeast parts are currently under construction, likely for a residential area with two-story buildings. The plot's current use is a playground, but it is designated for residential use in the urban development plan./n

    The plot has several service land uses nearby, including Clara Hughes Public School, Knights of Columbus Park, Hedwig Catholic School, and various shopping centers and commercial shops around Howard Street. These services can meet the needs of future residents./n
    
    Due to ongoing construction, approximately 3 hectares of the land is available for planning and design. This plot can accommodate about 45 residential villas with a mean area of 500 square meters and about 56 two-story residential plots with a mean area of 400 square meters. If built solely as residential villas, it could house 180 people, and if entirely built as two-story apartments, it could house around 450 people, based on an average household size of four. /n
    
    The advantages of this plot include suitable design, acceptable capacity, relatively good size, and proximity to various service land uses. The current construction and open space suggest some existing planning, which could be contradictory to the original study's purpose.`
  },
  {
    key: '3',
    alternatives: 'Alternative 3',
    shape_size:  images.a3_map2,
    plot_area: '2.3',
    land_use_status: "Open space",
    land_use: "Residential",
    residential_units : "37 villas (500 square meters)",
    capacity: "140 people",
    services: "Excellent",
    capability: "Low",
    scoring: "40",
    map1: images.a3_map1 ,
    map2: images.a3_map2,
    description: `Alternative 3, located in Oshawa, offers better access to primary city services than Alternative 2 due to its proximity to the city's main texture. This 2.3-hectare plot is bordered by Adelaide Street to the north, Wilson Street to the east, Beverly Street to the south, and Central Park Street to the west, with Beverly Street providing the primary access. The land, currently used as a playground and open space by the Oshawa Coronation Institute, is rectangular in shape and surrounded by key landmarks including the Oshawa Coronation building and Woodview Park. These elements impose certain constraints on the plot.

    Urban development plans designate the entire plot for residential use, suggesting a potential for around 35 villa-style residential plots, each approximately 500 square meters, to accommodate about 140 people. The plot's shape and proximity to services such as Great Beginnings Montessori School, Costco, and various shopping centers enhance its residential viability. However, its current use and limited access pose challenges to its development and optimal residential utilization.`
  },
  {
    key: '4',
    alternatives: 'Alternative 4',
    shape_size: images.a4_map2,
    plot_area: '5.2',
    land_use_status: "Open space",
    land_use: "Residential",
    residential_units : "45 villas (500 square meters) or 56 two-story residential units",
    capacity: "180 people 450 people",
    services: "Low",
    capability: "Moderate",
    scoring: "63",
    map1: images.a4_map1 ,
    map2: images.a4_map2,
    description: `Alternative 4, situated in the northern part of Oshawa, covers about 1.6 hectares and is bordered by Ritson Street, which serves as its primary access route. Although it is distant from the city's main texture, its proximity to Taunton and Beatrice streets brings it close to significant services. The plot, currently used as a playground and open space by Beau Valley Public School, is designated in the urban development plan for residential use. Its square shape is shown on Map 16.

    Key services near Alternative 4 include Value Village, Metro grocery store, Canada Trust Branch, Ritson North Medical Center, and Margaret's Health & Beauty Center. The plot has the potential to accommodate either 34 residential plots with an average size of 400 square meters or 27 residential plots with an average size of 500 square meters. If developed into 400 square meter units, it could house about 136 people, or 108 people with 500 square meter units, assuming a household size of four.
    
    While the plot’s shape and proximity to services are advantageous, its relatively small size compared to other options limits its potential effectiveness in achieving the main project goal of settling immigrants, even if fully developed according to the proposed plans.`
  },
  
];

const TagLandComponenet = ({tag})=>{
/// barren, Open space, Under construction, Residential
  return(
   <>
    {tag === "barren" && <Tag color="magenta">{tag}</Tag>}
    {tag === "Open space" && <Tag color="cyan">{tag}</Tag>}
    {tag === "Under construction" && <Tag color="orange">{tag}</Tag>} 
    {tag === "Residential" && <Tag color="purple">{tag}</Tag>} 
   </>
  )
}
const TagComponenet = ({tag})=>{

  return(
   <>
    {tag === "Excellent" && <Tag color={EXCELLENT}>{tag}</Tag>}
    {tag === "Moderate" && <Tag color={MODERATE}>{tag}</Tag>}
    {tag === "Low" && <Tag color={LOW}>{tag}</Tag>} 
   </>
  )
}


const columns = [
  {
    title: 'Alternatives',
    dataIndex: 'alternatives',
    key: 'alternatives',
    fixed: 'left',
    width: 120,
  },
  {
    title: 'Scoring',
    dataIndex: 'scoring',
    key: 'scoring',
    width: 120,

  },
  {
    title: 'Plot area (hectares)',
    dataIndex: 'plot_area',
    key: 'plot_area',
    width: 120,
  },

  {
    title: 'Current status land use',
    dataIndex: 'land_use_status',
    key: 'land_use',
    width: 120,
    render: (_, record) => (
      <TagLandComponenet tag={record.land_use_status}/>
    )
  },
 
  {
    title: 'Optimal land use',
    dataIndex: 'land_use',
    key: 'land_use',
    width: 120,
    render: (_, record) => (
      <TagLandComponenet tag={record.land_use}/>
    )
  },

  {
    title: 'Number of residential units',
    dataIndex: 'residential_units',
    key: 'residential_units',
    width: 250,
  },
  
  {
    title: 'Population settlement capacity',
    dataIndex: 'capacity',
    key: 'capacity',
    width: 150,
  },
 
  {
    title: 'Access to services',
    dataIndex: 'services',
    key: 'services',
    width: 120,
    render: (_, record) => (
      <TagComponenet tag={record.services}/>
    )
  },
  {
    title: 'Implementation and design capability',
    dataIndex: 'capability',
    key: 'capability',
    width: 120,
    render: (_, record) => (
      <TagComponenet tag={record.capability}/>
    )
  },
  {
    title: 'Action',
    fixed: 'right',
    width: 150,
    key: 'action',
    render: (_, record) => (
      <Space size="large">
      {/*   <a onClick={()=>{console.log("heloo")}}>Detail</a> */}
        <CustomModal
        modalTitle={record.alternatives}
        modalContents={
          <div style={{display:"flex", }}>
            <p >{record.description}</p>
          <div style={{display:"flex", flexDirection:'column', marginLeft:"20px"}}>
            <img src={record.map1} alt="Map 1 Area 1"  style={{width:"300px"}}/>
            <img src={record.map2} alt="Map 2 Area 1"  style={{width:"300px"}} />
          </div>
          </div>
       
        }
        renderButton={(showModal) => (
          <a onClick={showModal}>
            Detail
          </a>
      )}
    />
      </Space>
    ),
  },
];


export default function Recommendations() {

  const [inputValue, setInputValue] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const targetRef = useRef(null);

  const onChangeSelect = value => {
    setSelectedRegion(value);
  };
  // Define a class name for the first row
  const rowClassName = (record, index) => {
    // Return a custom class for the first row
    return index === 0 ? 'first-row' : '';
  };

  const onChange = (value) => {
  setInputValue(value);
  setShowTable(false);
 
    setTimeout(() => {
        setShowTable(true);
    }, 1000);

  };

  useEffect(() => {
    if (showTable && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showTable]);

  return (
    <div
        style={{
            padding: 24,
            height: "100%"
        }}
    >
     <div style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}}>

    <FormComp 
    onChangeSelect={onChangeSelect}
    handleApplyButtonClick={()=>{setShowTable(true);}}
    region={selectedRegion}
    />
    </div>

       <style>
        {`
          .first-row {
            background-color:#e7f6e7; 
          }
          .first-row .ant-table-cell-fix-left-last{
            background-color:#e7f6e7; 
          }
          .first-row .ant-table-cell-fix-right-first{
            background-color:#e7f6e7; 
          }
        `}
      </style>
  
      {showTable && 
        <div ref={targetRef} style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}}>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>City of Oshawa</p>
            <p>
            Oshawa, a city in Ontario, Canada, has a population of 175,383 and is located 60 km east of Toronto on Lake Ontario's shores. Historically known as the "automobile capital" of Canada, it now focuses on education and health sciences, with General Motors still significantly impacting its economy. The city hosts Durham College, Trent University Durham, and Ontario Tech University. Key economic sectors include advanced manufacturing, health technology, and IT. Oshawa was ranked as the sixth best place in Canada for full-time employment in 2016 and is an urban growth center with diverse cultural, dining, and entertainment options. It serves as a regional innovation hub, offering facilities for startups.
            </p>
      
            <Table 
            dataSource={dataSource} 
            columns={columns} 
            bordered
            scroll={{
                x: 1300,
              }}
            rowClassName={rowClassName}
            />
          </div> 
      }
  
    </div>
  )
}


