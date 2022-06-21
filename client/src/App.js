import './App.css';
import { useState, useEffect, useRef } from 'react';

import Utilization from './components/Utilization';
import ButtonGroup from './components/ButtonGroup';
import NextPrev from './components/NextPrev';
import Dropdown from './components/Dropdown';
import utilDataSet from './seed/ultilization.json'
import woDataSet from './seed/workorders.json'
import Morale from './components/Morale';
import Button from './components/Button';
import OnTrack from './components/OnTrack';
import Clock from './components/Clock';
import WorkOrder from './components/WorkOrder';
import Utilization2 from './components/Utilization2';
import Input from './components/Input';

function App() {
  const [utilChoice, setUtilChoice] = useState("init");
  const [utilData, setUtilData] = useState(utilDataSet)
  const [selectedUtil, setSelectedUtil] = useState(utilData.allTechs)
  const [selectedUtilCount, setSelectedUtilCount] = useState(selectedUtil.length - 1)
  const [toggleUtil, setToggleUtil] = useState(false)

  const [moraleChoice, setMoraleChoice] = useState("init")
  const [onTrackChoice, setOnTrackChoice] = useState("init")

  const [progressChoice, setProgressChoice] = useState("Budget")

  useEffect(() => {
  }, [])

  useEffect(() => {

    if (utilChoice === "Total Hours") {
      setSelectedUtil(utilData.allTechs)
    }
    if (utilChoice === "Karl") {
      setSelectedUtil(utilData.karl)
    }
    if (utilChoice === "Paul") {
      setSelectedUtil(utilData.paul)
    }

  }, [utilChoice])

  const nextPrev = (type) => {
    if (type === "prev") {
      if (selectedUtilCount <= 0) {
        return;
      } else {
        setSelectedUtilCount(selectedUtilCount - 1)
      }
    } else {
      if (selectedUtilCount >= selectedUtil.length - 1) {
        return;
      } else {
        setSelectedUtilCount(selectedUtilCount + 1)
      }

    }
  }

  const qtrMoWk = (type) => {
    if (type === "qtr") {
      setMoraleChoice("qtr")
    }
    if (type === "mo") {
      setMoraleChoice("mo")
    }
    if (type === "wk") {
      setMoraleChoice("wk")
    }
  }

  const budgTl = (type) => {
    if (type === "Budget") {
      setProgressChoice("Budget")
    }
    if (type === "Timeline") {
      setProgressChoice("Timeline")
    }
  }

  const tglIt = () => {
    setToggleUtil(!toggleUtil)
  }

  return (
    <div className="App h-screen ">
      <div className='h-full w-12/12 relative  grid grid-rows-2 grid-flow-col justify-evenly items-center mt-5'>
        <div className='border-2 row-span-2 h-auto self-start mt-5 shd rounded border-slate-200 border-t-foxtrot '>
          <h1 className='m-2 text-center text-2xl font-bold'>Active Work Orders</h1>
          <hr className='w-full border-zinc-300'/>
          {woDataSet.map(item =>
            <div>
            <WorkOrder 
              name={item.name}
              date={item.date}
              progress={item.progress}
              techs={item.techs}
            />
            <hr className='w-full border-zinc-300'/>
            </div>
            )}
        </div>
        <div className='border-2 shd rounded border-slate-200 border-t-foxtrot p-2 '>
          <div className='flex justify-between '>
            <h1 className='mr-2'>{selectedUtil[selectedUtilCount][0].date} - {selectedUtil[selectedUtilCount][6].date}/2022</h1>
            <h1 className='text-2xl font-bold text-center'>Utilization</h1>
            <div className='flex items-center'>
              <Button onClick={tglIt} text={toggleUtil ? "stacked" : "mixed"}/>
              <NextPrev nextPrev={nextPrev} />
            </div>
          </div>
          {toggleUtil ? <Utilization data={selectedUtil[selectedUtilCount]} /> :
          <Utilization2 data={selectedUtil[selectedUtilCount]} /> }
          <div className='flex '>
            {/* <Dropdown
              list={["Total Hours", "Karl", "Paul"]}
              util={true}
              setUtilChoice={setUtilChoice}
            /> */}
            <Input setter={setUtilChoice} place="try Karl or Paul"/>
            <h1 className='text-center grow'>{utilChoice === "init" ? "Total Hours" : utilChoice}</h1>
            <Button text="See Details" />
          </div>

        </div>
        <div>
          <div className='border-2 shd border-zinc-300 border-t-foxtrot rounded  p-2'>
            <div className='flex justify-between '>
              <ButtonGroup btnCount={3} onClick={qtrMoWk} left="qtr" middle="mo" right="wk" />
              <h1 className='text-2xl font-bold text-center'>Morale</h1>
              <div className='flex w-36 items-center'>
                
              </div>
            </div>
            <Morale moraleChoice={moraleChoice} setMoraleChoice={setMoraleChoice} />
            <div className='flex'>
              <Dropdown
                list={["All", "Paul", "Karl", "John"]}
                setUtilChoice={setUtilChoice}
              />
              <h1 className='text-center grow'>{utilChoice}</h1>
              <Button text="See Details" />
            </div>
          </div>
        </div>
        <div>
          <div className='border-2 shd border-zinc-300 border-t-foxtrot rounded p-2'>
            <div className='flex justify-between '>
              <ButtonGroup onClick={budgTl} left="Budget" middle="Timeline" />
              <h1 className='text-2xl font-bold text-center'>Progress</h1>
              <div className='flex w-28 items-center'>
                
              </div>
            </div>
           
            <OnTrack progressChoice={progressChoice}/>
            <div className='flex'>
              <Dropdown
                list={["All Work Orders", "gulfstream", "cirrus", "piper", "cessna", "mooney"]}
                ontrack={true}
                setOnTrackChoice={setOnTrackChoice}
              />
              <h1 className='text-center grow'>{onTrackChoice}</h1>
              <Button text="See Details" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
