import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import getRandomColor from '../utils/getRandomColor';

const Utilization2 = (props) => {
  // console.log(props.data)
  const [bars, setBars] = useState([])
  useEffect(() => {
    let finalKeys = [];

    props.data.map(item => {
      let keys = Object.keys(item);

      let newkeys = finalKeys.concat(keys)
      newkeys = [...new Set([...finalKeys, ...keys])]
      finalKeys = newkeys.filter(function (e) { return e !== 'date' })

    })
    finalKeys.push(finalKeys.shift())
    setBars(finalKeys)

  }, [])


  return (
    <BarChart
      width={500}
      height={350}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {bars.map((item, i) => {
        return <Bar dataKey={item}  fill={item === "unused" ? "#A0A0A0" : getRandomColor(i)} />
      })}


    </BarChart>
  )
}

export default Utilization2