import React, { useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const [ showCart, setShowCart ] = useState(false);
  return (
    <header>
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart}/>}
      <nav className='flex px-8 h-16 items-center bg-black text-white justify-between'>
        <h1 className=' text-green-400 text-2xl'>Shopping Cart</h1>
        <ul className='flex text-xl gap-6 justify-center items-center'>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li onClick={() => setShowCart(!showCart)}>
            <FaCartPlus />
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
