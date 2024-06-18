import React from 'react'
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default function CriteriaOverview() {
    return (
        <div
            style={{
                padding: 24,
                background: "white",
                borderRadius: "10px",
                height: "100%"
            }}
        >
        <Typography>
        <Title>Key Criteria for Selecting Residential Areas</Title>
        <Paragraph>
            In our quest to enhance social welfare through thoughtful urban planning, we've established six key criteria for determining the optimal locations for residential developments. These criteria are used to define the ideal areas for residential placement, ensuring accessibility, convenience, and quality of life. Here’s how we evaluate potential residential sites:

        </Paragraph>
        <ol>
                <li>
                <p><strong>Access to Open Spaces and Recreation:</strong> Each residential area should be no less than <strong>350 meters (4-minutes walk)</strong> away from recreational facilities, ensuring ample open space for residents to enjoy.</p>
                </li>
                
                <li>
                <p><strong>Proximity to Shopping Centers:</strong> Shopping amenities should be conveniently located at least <strong>750 meters (10-minute walk)</strong> from residential areas to provide easy access without compromising the tranquility of the living space.</p>
                </li>
               
                <li>
                <p><strong>Availability of Institutional and Services:</strong> Essential services and institutional centers should be within <strong>2 km (25-minute walk)</strong> from residential areas, ensuring that key services are neither too far for comfort nor too close to disrupt the residential ambiance.</p>
                </li>

                <li>
                <p><strong>Proximity to Important Public Spaces:</strong> Major public spaces, which enhance community life and interaction, should be established within a radius of <strong>1100 meters (15-minute walk)</strong> from the residential site.</p>
                </li>

                <li>
                <p><strong>Utility Centers Accessibility:</strong> Urban utility centers should be no further than <strong>650 meters (9-minutes walk)</strong> from residential areas, striking a balance between accessibility and maintaining residential peace.</p>
                </li>

                <li>
                <p><strong>Distance from Industrial Areas:</strong> To ensure a healthy living environment, residential areas should be situated at least <strong>750 meters (10-minute walk)</strong> away from industrial zones. The greater the distance from industrial activities, the better the living quality.</p>
                </li>

            </ol>
            <Paragraph>
            Each of these criteria will be examined at the city level in the present study. In this study, the locations of each of the above-
            mentioned activities are identified in the criteria in the city through the locating analysis that takes place on the city of

            Oshawa and buffer of each is extracted. In the next step, by superimposing the layers of analysis obtained and scoring them,
            the common range, in which all the above quantitative criteria are considered, is defined. This range is a place that has all
            the indicators and criteria of an ideal residential area and locating the desired area and plot can be searched in it. Finally, by
            surveying the existing texture in the specified area and considering the shape of the parts and how to access the roads
            around it, various alternatives are introduced, and among them, the part that has the most optimal conditions is presented as
            the buildable site for the purpose of this study (immigrant settlement). 
            </Paragraph>
        </Typography>
        </div>
      )
    }

