import React, { useState, useEffect, useRef } from "react";
import Moment from 'react-moment';
import moment from "moment";
import Negative from "./emojiSVG/Negative"
import Positive from "./emojiSVG/Positive"
import Neutral from "./emojiSVG/Neutral"
import getRandomRating from "../utils/getRandomRating";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";




const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    if (value > 80) {
        return (
            <Positive cx={cx} cy={cy} />
        )
    }
    if (value > 50) {
        return (
            <Neutral cx={cx} cy={cy} />
        )
    }
    return (
        <Negative cx={cx} cy={cy} />
    );
};

export default function Morale(props) {
    const [seed, setSeed] = useState([])
    const [update, setUpdate] = useState(1)
    const [display, setDisplay] = useState([])
    const [loadChart, setLoadChart] = useState(false)



    useEffect(() => {
        let i;
        let seedData = [];
        for (i = 0; i < 90; i++) {
            let theDate = moment().subtract(90 - i, 'days')
            let obj = {
                date: theDate.calendar("dd, mm").substring(0, 5),
                karl: getRandomRating(),
                paul: getRandomRating(),
                john: getRandomRating()
            }
            seedData.push(obj)
        }
        setSeed(seedData)
        setUpdate(update + 1)
       
    }, [])

    useEffect(() => {
        let averagedSeed = []
        if (seed.length) {
            seed.map(item => {
                let average = (item.karl + item.paul + item.john) / 3;
                averagedSeed.push({ ...item, average: average })
            })

            setSeed(averagedSeed)
        }

        setLoadChart(true)
    }, [update])

   
    
    

    useEffect(() => {
        if (props.moraleChoice === 'wk') {
            let newDisplay = seed.slice(seed.length - 7, seed.length)
            setDisplay(newDisplay)
        }

        if (props.moraleChoice === 'mo') {
            let i;
            let ct = 0;
            let newDisplay = []
            let arr = seed.slice(seed.length-35, seed.length)
            for (i = 0; i < 5; i++) {
                let avgOut = arr.slice(ct, ct+7)
                ct+=7
                let totals = avgOut.map(item => item.average)
                let sum = totals.reduce((partial, a) => partial + a, 0)
                 
                let obj = {
                    date: avgOut[3].date,
                    average: sum / 7
                }
                console.log(obj)
                newDisplay.push(obj)
            }

            setDisplay(newDisplay)
        }

        if (props.moraleChoice === "qtr") {
            let i;
            let ct = 0;
            let newDisplay = []
            let arr = seed.slice(seed.length-84, seed.length)
            for (i = 0; i < 7; i++) {
                let avgOut = arr.slice(ct, ct+12)
                ct+=12
                let totals = avgOut.map(item => item.average)
                let sum = totals.reduce((partial, a) => partial + a, 0)
                 
                let obj = {
                    date: avgOut[6].date,
                    average: sum / 12
                }
                console.log(obj)
                newDisplay.push(obj)
            }

            setDisplay(newDisplay)

        }
    }, [props.moraleChoice])



    return (
        <LineChart
            width={500}
            height={300}
            data={display}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickSize={5}/>
            <Tooltip />
            <Legend />


            <Line type="monotone" dataKey="average" stroke="#FF521B" strokeWidth={3} dot={<CustomizedDot />} />

        </LineChart>
    );
}
