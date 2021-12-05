import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect } from 'react';
import './CartWidget.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { useState } from 'react/cjs/react.development';

const CartWidget = () => {
	const { cart } = useContext(CartContext);
	const [totalQuantity, setTotalQuantity] = useState(0);
	useEffect(() => {
		const totalQuantityTemp = cart.reduce((a, b) => a + b.quantity, 0);
		setTotalQuantity(totalQuantityTemp);
	}, [cart]);
	return (
		<Link to='/cart' className='cart-icon'>
			<FontAwesomeIcon icon={faShoppingCart} />
			<div className='cart-counter'>{totalQuantity}</div>
		</Link>
	);
};

export default CartWidget;
