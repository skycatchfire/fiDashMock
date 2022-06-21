import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";
const data = [
  {
    name: "gulfstream",
    "Actual Hours": 12,
    "Est. Hours": 16,
    "Actual Cost": 900,
    "Est. Cost": 1200

  },
  {
    name: "cirrus",
    "Actual Hours": 6,
    "Est. Hours": 8,
    "Actual Cost": 750,
    "Est. Cost": 1000

  },
  {
    name: "piper",
    "Actual Hours": 7,
    "Est. Hours": 6,
    "Actual Cost": 700,
    "Est. Cost": 600
  },
  {
    name: "cessna",
    "Actual Hours": 10,
    "Est. Hours": 12,
    "Actual Cost": 1500,
    "Est. Cost": 1800
  },
  {
    name: "mooney",
    "Actual Hours": 10,
    "Est. Hours": 8,
    "Actual Cost": 2000,
    "Est. Cost": 1600
  }

];

export default function Progress(props) {
  console.log(props.progressChoice)
  const [xType, setXtype] = useState('number')

  useEffect(() => {
    if (props.progressChoice === "Budget") {
      setXtype('number')
    }
    if (props.progressChoice === "Timeline") {
      setXtype('string')
    }

  }, [props.progressChoice])


  return (
    
      <ComposedChart
        layout="vertical"
        width={500}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        {props.progressChoice === "Timeline" ?
          <>
            <Bar dataKey="Actual Hours" barSize={20} fill="#FF8E6A" />
            <Scatter dataKey="Est. Hours" fill="#FF521B" shape="square" />
          </> : ""}
        {props.progressChoice === "Budget" ?
          <>
            <Bar dataKey="Actual Cost" barSize={20} fill="#47AE60" />
            <Scatter dataKey="Est. Cost" fill="#007A1E" shape="square" />
          </> : ""}
      </ComposedChart>
   
  );
}