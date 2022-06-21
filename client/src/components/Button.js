/* This example requires Tailwind CSS v2.0+ */
export default function Button(props) {
    return (
      <>
        
        <button
          type="button"
          onClick={props.onClick}
          className="fiButton mr-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-bold rounded-md shadow-sm text-white bg-foxtrot focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
        >
            {props.text}
        </button>
       
      </>
    )
  }
  