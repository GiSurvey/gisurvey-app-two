import React, {useState, useRef, useEffect} from 'react'
import FormComp from './FormComp'
import {  Typography } from 'antd';
import { newsData  } from './dataDefinitions'; // Load select and checkbox options from external file

const { Title, Text } = Typography;

export default function News() {
    const [selectedRegion, setSelectedRegion] = useState('');
    const targetRef = useRef(null);
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
      <NewsList newsData={newsData} targetRef={targetRef} />
    }
    </div>
  )
}

const NewsList = ({ newsData, targetRef }) => {
    return (
        <div ref={targetRef} style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}} >
            {newsData.map((item, index) => (
                <div key={index} style={{ marginBottom: '20px', padding: '20px' ,  backgroundColor: "#E0EDF6" , borderRadius: "15px", }}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                </div>
            ))}
        </div>
    );
}