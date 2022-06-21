/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
  const[selected, setSelected] = useState("init");
  
  useEffect(() => {
    setSelected(props.list[0])
  }, [])
  
  useEffect(() => {
    if (props.util) {
    props.setUtilChoice(selected)
    }
    if (props.ontrack) {
      props.setOnTrackChoice(selected)
    }
  }, [selected])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange-500">
          {selected}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right z-20 absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.list.map((item) => {
              
              return(
              <Menu.Item>
                <p className='text-center' onClick={() => setSelected(item)}>
                  {item}
                </p>
                
              </Menu.Item>)}
            )}

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
