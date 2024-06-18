import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data, width }) => (
  <div style={{marginTop:30}}>
    <ResponsiveContainer width={width} height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="population" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComponent;
