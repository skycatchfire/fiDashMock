import React from 'react'
import progress15 from '../assets/15.png'
import progress36 from '../assets/36.png'
import progress89 from '../assets/89.png'
import TechBubble from './TechBubble'





const WorkOrder = (props) => {
    return (
        <div className='grid grid-cols-8 m-3'>
            <div className='col-span-6'>
                <h1 className='text-lg mb-0'>{props.name}</h1>
            </div>
            <div className='col-span-2'>
                <h1>Due: {props.date}</h1>
            </div>
            <div className='col-span-6 flex'>
                {props.techs.map(item => 
                    <TechBubble tech={item} />
                    )}    
            </div>
            <div className='col-span-2 flex items-center'>
                <h1 >{props.progress}%</h1>
                {props.progress === 15 ? <img src={progress15} /> : ""}
                {props.progress === 36 ? <img src={progress36} /> : ""}
                {props.progress === 89 ? <img src={progress89} /> : ""}

            </div>
           
        </div>
    )
}

export default WorkOrder