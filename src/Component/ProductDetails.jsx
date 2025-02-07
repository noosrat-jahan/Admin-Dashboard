import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);

  const { id, name, data } = productDetails;
  return (
    <div>
     
      <div className='border border-green-600 space-y-3 pb-3 w-5/6 mt-10 rounded p-5 mx-auto text-left'>
            <span className='text-gray-600 font-bold'>Product Id: {id}</span>
            <p className='lg:text-2xl font-bold text-green-800'><span className='text-lg text-blue-800'>Product Name</span >: {name}</p>

            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Color</span>: {data?.color? data.color : "Not Available"}</p>

            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Capacity</span>: {data?.Capacity ? data.Capacity : "Not Available" }</p>

            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Price</span>: $ {data?.Price ? data.Price : "Not Available"}</p>
            
            <p className='lg:text-lg '><span className='font-bold text-blue-800 '>Generation</span>: {data?.Generation ? data.Generation : "Not Available"}</p>        
            
        </div>
    </div>
  );
};

export default ProductDetails;
