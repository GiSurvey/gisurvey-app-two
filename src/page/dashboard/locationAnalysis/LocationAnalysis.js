import React, { useState, useRef, useEffect } from 'react';
import FormComp from './FormComp';
import MapSection from './MapSection';
import { Collapse } from 'antd';
import { collapseItemsDefault } from './dataDefinitions'; 

export default function LocationAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCriterias, setSelectedCriterias] = useState([]);
  const [selectedCollapseItems, setSelectedCollapseItems] = useState([]);
  const targetRef = useRef(null);

  const onChangeSelect = value => {
    setSelectedRegion(value);
  };

  const onChangeCheckbox = value => {
    setSelectedCriterias(value);
    const filteredItems = value.map(crit => collapseItemsDefault.find(item => item.label === crit));
    setSelectedCollapseItems(filteredItems);
  };

  useEffect(() => {
    if (selectedCollapseItems.length > 0 && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCollapseItems]);

  return (
    <div style={{ padding: 24, height: "100%" }}>
     
     <div style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}}>
      <FormComp 
        onChangeSelect={onChangeSelect}
        onChangeCheckbox={onChangeCheckbox}
        region={selectedRegion}
      />
      </div>


      {selectedCollapseItems.length > 0 && (
        <div ref={targetRef} style={{ background: "white",  padding: 24, borderRadius: "10px", marginBottom:"3%"}}>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>City of Oshawa</p>
          <p>
          Oshawa, a city in Ontario, Canada, has a population of 175,383 and is located 60 km east of Toronto on Lake Ontario's shores. Historically known as the "automobile capital" of Canada, it now focuses on education and health sciences, with General Motors still significantly impacting its economy. The city hosts Durham College, Trent University Durham, and Ontario Tech University. Key economic sectors include advanced manufacturing, health technology, and IT. Oshawa was ranked as the sixth best place in Canada for full-time employment in 2016 and is an urban growth center with diverse cultural, dining, and entertainment options. It serves as a regional innovation hub, offering facilities for startups.
          </p>
          <Collapse >
            {selectedCollapseItems.map((item, index) => (
              <Collapse.Panel header={item.label} key={index}>
                <MapSection summary={item.children.summary} map={item.children} />
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      )}
    </div>
  );
}


