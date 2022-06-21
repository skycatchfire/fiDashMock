import React, {useState, useEffect} from "react";

export default function ButtonGroup(props) {
  // const [btnCount, setBtnCount] = useState(2);

  //   useEffect(() => {
  //     if (props.btnCount === 3 ) {
  //       setBtnCount(3)
  //     }
  //   },[])


    return (
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          onClick={() => props.onClick(props.left)}
          type="button"
          className="relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
        >
          {props.left}
        </button>
        <button
          onClick={() => props.onClick(props.middle)}
          type="button"
          className={`-ml-px relative inline-flex items-center px-2 py-1 border ${props.btnCount === 3 ? "" : "rounded-r-md"} border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500`}
        >
          {props.middle}
        </button>
        { props.btnCount === 3 ?
        <button
          onClick={() => props.onClick(props.left)}
          type="button"
          className="-ml-px relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
        >
          {props.right}
        </button> : ""}
      </span>
    )
  }
  