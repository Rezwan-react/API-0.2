import React from 'react'
import './Home.css'
import { FaShoppingCart } from 'react-icons/fa';
function Home() {
  return (
    <>
      <div className='flex justify-center gap-5 flex-wrap'>
        <div className="w-[230px]  bg-white border-2 border-gray-800 shadow-lg rounded-md flex flex-col justify-start p-5 gap-2.5 font-sans ml-5 mt-5">
              <div className="flex justify-center transition-all duration-500 hover:translate-y-[-3px]">
                {/* Image placeholder - add img src to div style as background */}
                <img src="download.png" alt="Photo" />
              </div>

            <div className="text-center text-lg font-medium text-gray-800"><h1>Laptop_name</h1></div>
            <div className="text-sm font-normal text-gray-500">
              <ul>
                <li>Model</li>
                <li>Processor</li>
                <li>RAM</li>
                <li>Display</li>
                <li>Storage_Type</li>
              </ul>
            </div>
          
            <hr className="w-full border border-gray-800 rounded-full" />
          
            <div className="flex justify-between items-center">
              <div className="text-lg font-medium text-gray-800">
                <span className="text-gray-500">$</span> 123.45
              </div>
              
              <button className="h-[35px] bg-white border-2 border-gray-800 rounded-md px-4 transition-all duration-300 hover:border-blue-500 active:translate-y-[3px]">
                Read More
              </button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Home