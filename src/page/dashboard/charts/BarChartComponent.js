import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarChartComponent = ({ data , width }) => {
    console.log("width",width )
    return(
   
  <div style={{marginTop:30}}>
    <ResponsiveContainer width={"100%"} height={400} >
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
)};

export default BarChartComponent;
