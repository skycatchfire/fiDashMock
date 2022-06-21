import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Week 1",
    "This Month": 4,
    "Last Month": 1,

  },
  {
    name: "Week 2",
    "This Month": 5,
    "Last Month": 3,
  },
  {
    name: "Week 3",
    "This Month": 3,
    "Last Month": 4,
  },
  {
    name: "Week 4",
    "Last Month": 2,
  },
  {
    name: "Week 5",
    
    "Last Month": 1,
  },
  
];

export default function App() {
  return (
    // <div>
    //     <h1 className="text-center">This Month</h1>
    //   <LineChart
    //     width={500}
    //     height={130}
    //     data={data}
    //     syncId="anyId"
    //     margin={{
    //       top: 10,
    //       right: 30,
    //       left: 0,
    //       bottom: 0
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Line type="monotone" dataKey="This Month" stroke="#8884d8" fill="#8884d8" />
    //   </LineChart>
    //   <h1 className="text-center">Last Month</h1>
    //   <LineChart
    //     width={500}
    //     height={130}
    //     data={data}
    //     syncId="anyId"
    //     margin={{
    //       top: 10,
    //       right: 30,
    //       left: 0,
    //       bottom: 0
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Line type="monotone" dataKey="Last Month" stroke="#82ca9d" fill="#82ca9d" />
    //   </LineChart>
     
    // </div>
    <LineChart
      width={500}
      height={240}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="This Month"
        strokeWidth={3}
        stroke="#FF521B"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" strokeDasharray="5 5" dataKey="Last Month" stroke="#626262" />
    </LineChart>
  );
  
}
