import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ setShowCart, showCart }) => {
  const [ quantity, setQuantity ] = useState(1);

  return (
    <div className='absolute p-4 h-screen z-20 sm:w-[500px] w-full bg-white'>
      <div className='mb-4 flex items-center justify-between'>
        <span className='text-3xl text-green-600 font-semibold'>Shopping Cart</span>
        <span className='text-2xl bg-slate-300 p-2 rounded-full text-slate-800' onClick={() => setShowCart(!showCart)}><RxCross2 /></span>
      </div>
      <hr className=' bg-black' />
      
      <div className='my-4'>
        <div className='flex gap-4 items-center'>
          <div className='w-28 h-28 rounded-lg overflow-hidden'>
            <img src="https://studios-tc.com/wp-content/uploads/2023/04/oversize-shirt-navy-front.webp" alt="" className='w-fulll h-full object-cover' />
          </div>
          <div>
            <span className='text-xl'>Full Sleve Shirt with Buttons</span>
            <p>$200</p>
            <div className='my-2 text-2xl'>
              <span onClick={() => setQuantity(quantity - 1)} className='px-3 py-1 bg-slate-300 rounded-md'>-</span>
              <span className='mx-4'>{quantity}</span>
              <span onClick={() => setQuantity(quantity + 1)} className='px-3 py-1 rounded-md bg-slate-300'>+</span>
            </div>
          </div>
          <span className='text-3xl h-full p-4 rounded-lg text-red-700 bg-red-200'><MdDelete /></span>
        </div>
      </div>

    </div>
  )
}

export default Cart
