import MapSection from './MapSection'
import {ParkLocations} from './geojsonData/ParkLocations';
import {Education} from './geojsonData/Education';
import LeafletMapMarker from './LeafletMapMarker';
import LeafletMapGeoJSON from './LeafletMapGeoJSON';

export const selectOption  =[
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

  export const checkboxOptions = 
['Open Spaces and Recreation', 
'Shopping Centers', 
'Institutional and Services',
'Utility Centers', 
'Industrial Areas' ];

export const collapseItemsDefault = [
    {
      key: '1',
      label: `Open Spaces and Recreation`,
      children: 
      <MapSection
        summary= {"Oshawa boasts a rich natural environment with about 40 to 50 percent of its urban area covered in green space, enhancing accessibility to recreational areas for residents. These spaces are well-maintained by city management and strategically located within 350 meters of residential areas, as illustrated in Map 2. The city's layout, particularly north of Highway 407, remains largely pristine to preserve its natural surroundings, ensuring sustainable development and easy access to open spaces for the community."}
        map= {<LeafletMapGeoJSON geojsonData={ParkLocations} />}
      />
       
      ,
    },
    {
      key: '2',
      label: 'Shopping Centers',
      children: 
      <MapSection
        summary= {`In Oshawa, shopping centers are essential for residential areas and are categorized into four types: Downtown Oshawa Urban Growth Center, Planned Commercial Center (like Oshawa Center Shopping Mall), Planned Commercial Strip (along King Street's north front), and Special Purpose Commercial (such as Walmart Supercentre). These centers are mainly located in the city’s core, with their importance decreasing as one moves away. Ideally, these centers should be within 750 meters of residential areas to ensure accessibility. `}
         map= {<LeafletMapMarker geojsonData={Education} />} 
      />
      ,
    },
    {
      key: '3',
      label: `Institutional and Services`,
      children: 
      <MapSection
        summary= {"Oshawa boasts a rich natural environment with about 40 to 50 percent of its urban area covered in green space, enhancing accessibility to recreational areas for residents. These spaces are well-maintained by city management and strategically located within 350 meters of residential areas. The city's layout, particularly north of Highway 407, remains largely pristine to preserve its natural surroundings, ensuring sustainable development and easy access to open spaces for the community."}
        map= {<LeafletMapGeoJSON geojsonData={ParkLocations} />}
      /> 
      ,
    },
    {
      key: '4',
      label: 'Industrial Areas',
      children: 
      <MapSection
        summary= {`In Oshawa, infrequently used service and institutional land uses like airports and special waterfront areas are located further from residential areas, with a functional radius of 2 kilometers. These facilities, which include monthly use categories, are limited in number, reflecting their limited use by residents.`}
         map= {<LeafletMapMarker geojsonData={Education} />} 
      />
      ,
    },
    {
      key: '5',
      label: 'Utility Centers',
      children: 
      <MapSection
        summary= {`Centers providing daily services like Local Central Area, Recreational Node, Tourist Node, and Utilities should be located close to residential areas due to their daily use. A functional distance of 650 meters is recommended for these land uses. Map 6 illustrates the access radius and functionality of each center, ensuring they are conveniently situated for urban residents.`}
         map= {<LeafletMapMarker geojsonData={Education} />} 
      />
      ,
    },
  ]


