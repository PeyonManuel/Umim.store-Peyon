import React, { useState } from 'react';
import './ItemCount.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
export const ItemCount = ({ stock = 10, initial = 1 }) => {
	const [itemCount, setItemCount] = useState(initial);
	const countUp = () => itemCount < stock && setItemCount(itemCount + 1);
	const countDown = () => itemCount > 1 && setItemCount(itemCount - 1);
	const addToCartAlert = (itemCount) => {
		alert(`Se ha añadido a su carrtito la cantidad de: ${itemCount}`);
	};
	return (
		<div className='item-count'>
			<div>
				<button className='minus' onClick={countDown}>
					{<FontAwesomeIcon icon={faMinus} className='cart-icon' />}
				</button>
				{itemCount}
				<button className='plus' onClick={countUp}>
					{<FontAwesomeIcon icon={faPlus} className='cart-icon' />}
				</button>
			</div>

			<button
				className='add-to-cart-btn'
				onClick={() => addToCartAlert(itemCount)}>
				Añadir al carrito
			</button>
		</div>
	);
};
