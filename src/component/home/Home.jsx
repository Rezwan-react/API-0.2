import React, { useEffect, useState } from 'react'
import './Home.css'
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductData } from '../../Slice/ProductSlice';
function Home() {
  const [product, steProduct] = useState([])
  const navigate              = useNavigate()
  const dispatch              = useDispatch();

  useEffect(()=>{
    axios. get('https://api.jsonbin.io/v3/b/668901ecacd3cb34a86216ee')
    .then((res)=> steProduct(res.data.record))
    .catch((error)=> console.log(error))
  },[])

  const handelShow = (item)=>{
    navigate('/data')
    dispatch(ProductData(item))
    localStorage.setItem('data', JSON.stringify(item))
  }
  
  return (
    <>
      <div className='flex justify-center gap-5 flex-wrap'>
        {
          product.map((item, i)=>(
            <div key={i} className="w-[300px]  bg-white border-2 border-gray-800 shadow-lg rounded-md flex flex-col justify-start p-5 gap-2.5 font-sans ml-5 mt-5">
              <div className="flex justify-center transition-all duration-500 hover:translate-y-[-3px]">
                {/* Image placeholder - add img src to div style as background */}
                <img src={item.Photo} alt="Photo" />
              </div>

            <div className="text-center text-lg font-medium text-gray-800"><h1>{item.Laptop_name}</h1></div>
            <div className="text-xl font-normal text-gray-500">
              <ul>
                <li>Model: {item.Model}</li>
                <li>Processor: {item.Processor}</li>
                <li>RAM: {item.RAM}</li>
                <li>Display: {item.Display}</li>
                <li>Storage_Type: {item.Storage_Type}</li>
              </ul>
            </div>
          
            <hr className="w-full border border-gray-800 rounded-full mt-2" />
          
            <div className="flex justify-between items-center mt-2">
              <div className="text-lg font-medium text-gray-800">
                <span className="text-gray-500">$</span> {item.Price}
              </div>
              
              <button onClick={()=>handelShow(item)} className="h-[35px] bg-white border-2 border-gray-800 rounded-md px-4 transition-all duration-300 hover:border-blue-500 active:translate-y-[3px]">
                Read More
              </button>
            </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home