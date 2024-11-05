import React from 'react'
import './Data.css'
import { useSelector } from 'react-redux'

function Data() {

  const data = useSelector((state)=> state.counter.value)



  return (
    <>
        <div className='flex justify-center gap-5 flex-wrap'>
          <div className="w-[800px] border-2 border-red-700 rounded-md p-2.5 max-w-[260px] shadow-lg bg-white font-sans  ml-5 mt-5">
            <div className="header flex justify-center items-center ">
              <div className="flex justify-center items-center transition-all duration-500 hover:translate-y-[-3px]">
              <img src={data.Photo} alt="Photo" />
              </div>              
            </div>
            <div className="info mt-4">
              <h2 className="block text-gray-800 title  text-xl font-semibold leading-5 py-3">
                {data.Laptop_name}
              </h2>
              <ul className="description text-gray-600 leading-relaxed">              
                <li>Product_id</li>
                <li>Model: {data.Model}</li>
                <li>Processor: {data.Processor}</li>
                <li>RAM: {data.RAM}</li>
                <li>Display: {data.Display}</li>
                <li>Display_Size: {data.Display_Size}</li>
                <li>Display_Type: {data.Display_Type}</li>
                <li>Display_Resolution: {data.Display_Resolution}</li>
                <li>Storage_Type: {data.Storage_Type}</li>
                <li>Storage_Capacity: {data.Storage_Capacity}</li>                
                <li>Charger_Capacity: {data.Charger_Capacity}</li>
                <li>Storage: {data.Storage}</li>
                <li>Touch_Screen: {data.Touch_Screen}</li>                
              </ul>
            </div>
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium text-gray-800">
                  <span className="text-gray-500">$</span> {data.Price}
                </div>            
                <button className="h-[35px] bg-white border-2 border-gray-800 rounded-md px-4 transition-all duration-300 hover:border-blue-500 active:translate-y-[3px]">
                  Buy Now 
                </button>
              </div>
          </div>
        </div>

    </>
  )
}

export default Data