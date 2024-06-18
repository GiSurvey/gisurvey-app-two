import React, { useState, useRef, useEffect } from 'react';
import mockData from './mockData';
import PieChartComponent from './PieChartComponent';
import LineChartComponent from './LineChartComponent'
import BarChartComponent from './BarChartComponent';
import ScatterPlotComponent from './ScatterPlotComponent';
import { Typography} from 'antd';
import FormComp from './FormComp';

const { Title, Text } = Typography;
export default function Charts() {
  const targetRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState('');

  const onChangeSelect = value => {
    setSelectedRegion(value);
  };

  useEffect(() => {
    if (selectedRegion !== '' && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedRegion]);

  
  return (
    <div
      style={{
        padding: 24,
        height: '100%'
      }}
    >

    <div style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}}>
     <FormComp 
        onChangeSelect={onChangeSelect}
      />
      </div>

      {selectedRegion !==""  && 
      <>
      <div ref={targetRef} style={{display:'flex', justifyContent:'space-between'}}>
     <ChartSection 
      title ='Population Growth Over Time'
      description ='This chart displays the population growth in Metropolis over time from the year 2000 to 2025.'
      type= "line"
      width = "62%"
      />
     <ChartSection 
      title ='Distribution of Age Groups'
      description ='This pie chart shows the percentage distribution of different age groups in Metropolis.'
      type= "pie"
      width = "35%"
      />
    </div>
    <div  style={{display:'flex', justifyContent:'space-between'}}>
     <ChartSection 
      title ='Monthly Rainfall'
      description ='This scatter plot shows the monthly rainfall in Metropolis, measured in millimeters.'
      type= "scatter"
      width = "35%"
      />
      <ChartSection 
      title ='Average Temperature by Month'
      description ='This bar chart displays the average temperature in Metropolis for each month of the year.'
      type= "bar"
      width = "62%"
      />
       </div>

      </>
      
       }
    
    </div>
  );
}



function ChartSection({title,description,type, width}) {
    return <div style={{
        padding: 24,
        background: 'white',
        borderRadius: '10px',
        marginBottom: 50,
        width: width
    }}>
        <Title level={3}>{title}</Title>
        <Text type="secondary" >{description}</Text>
        {type==="line" && <LineChartComponent  data={mockData.populationGrowth} />}
        {type==="pie" && <PieChartComponent  data={mockData.ageDistribution} />}
        {type==="bar" && <BarChartComponent  data={mockData.averageTemperature} />}
        {type==="scatter" && <ScatterPlotComponent data={mockData.monthlyRainfall} />}
    
    </div>;
}
