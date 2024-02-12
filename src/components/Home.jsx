import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-wrap gap-8 justify-center items-center my-6'>
      <div>
        <div className='w-[320px] h-64'>
          <img src="https://studios-tc.com/wp-content/uploads/2023/04/oversize-shirt-navy-front.webp" alt="" className='w-full h-full object-cover' />
        </div>
        <div className='my-4 flex justify-between items-center'>
          <span className='text-xl'>Name of the product</span>
          <span className='text-2xl text-red-600 font-semibold'>$299</span>
        </div>
        <button className=' text-xl bg-black text-white w-full py-3 rounded-md'>ADD TO CART</button>
      </div>
      <div>
        <div className='w-[320px] h-64'>
          <img src="https://studios-tc.com/wp-content/uploads/2023/04/oversize-shirt-navy-front.webp" alt="" className='w-full h-full object-cover' />
        </div>
        <div className='my-4 flex justify-between items-center'>
          <span className='text-xl'>Name of the product</span>
          <span className='text-2xl text-red-600 font-semibold'>$299</span>
        </div>
        <button className=' text-xl bg-black text-white w-full py-3 rounded-md'>ADD TO CART</button>
      </div>
      <div>
        <div className='w-[320px] h-64'>
          <img src="https://studios-tc.com/wp-content/uploads/2023/04/oversize-shirt-navy-front.webp" alt="" className='w-full h-full object-cover' />
        </div>
        <div className='my-4 flex justify-between items-center'>
          <span className='text-xl'>Name of the product</span>
          <span className='text-2xl text-red-600 font-semibold'>$299</span>
        </div>
        <button className=' text-xl bg-black text-white w-full py-3 rounded-md'>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Home
