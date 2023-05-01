import { HiUser } from 'react-icons/hi'

import '../styles/CartIcon.scss'

function CartIcon () {
  return (
    <div className='cart-icon'>
      <HiUser size={50} color='black' />
    </div>
  )
}

export default CartIcon
