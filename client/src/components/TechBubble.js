import React, {useState, useEffect} from 'react'
import getRandomColor from '../utils/getRandomColor';

const TechBubble = (props) => {
  const [color, setColor] = useState(0);

  useEffect(() => {
    switch (props.tech) {
        case "KB":
            setColor(getRandomColor(0))
        break;
        case "JT":
            setColor(getRandomColor(1))
        break;
        case "PT":
            setColor(getRandomColor(2))
        break;
        case "MH":
            setColor(getRandomColor(3))
        break;
        case "AP":
            setColor(getRandomColor(4))
        break;
    
        default:
            break;
    }
  }, [])
  
   

  return (
    <div className='bubble h-auto w-7 h-7 mx-1 flex' style={{backgroundColor: color}}>
        <h1 className='text-center text-white p-0 font-bold m-auto'>{props.tech}</h1>
    </div>
  )
}

export default TechBubble