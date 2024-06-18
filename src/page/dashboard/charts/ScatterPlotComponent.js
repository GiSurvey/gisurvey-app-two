import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ScatterPlotComponent = ({ data, width }) => (
  <div style={{marginTop:30}}>
    <ResponsiveContainer width={width} height={400}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="category" dataKey="month" name="Month" />
        <YAxis type="number" dataKey="rainfall" name="Rainfall (mm)" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        <Scatter name="Monthly Rainfall" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);

export default ScatterPlotComponent;
