import React from 'react'
import './ProductCard.css'

const  ProductCard= ({Product}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursur-pointer'>
        <div className='h-[20rem] '>
            <img className='h-full w-full object-cover object-left-top' src={Product.imageUrl} alt="" />
        </div>
        <div className='text-Part bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{Product.brand}</p>
                <p>
                   {Product.title}
                </p>
            </div>
            <div className='flex items-center space-x-3'>
                <p className='font-bold'>{Product.discountedPrice}</p>
                <p className='line-through opacity-50'>{Product.price}</p>
                <p className='text-green-600 font-bold'>{Product.discountPersent}% off</p>
                </div>

        </div>
    </div>
  )
}

export default ProductCard