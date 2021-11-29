import React, { useContext, useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemCount } from '../ItemCount/ItemCount';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ItemDetailContainer.scss';
import { CartContext } from '../../context/cartContext';
import { collection, getDoc, doc } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';
export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const [isAdded, setIsAdded] = useState(false);
	const { addItem, isInCart } = useContext(CartContext);
	const { itemId } = useParams();
	const onAdd = (item, quantityToAdd) => {
		if (!isInCart(item.id)) {
			addItem(item, quantityToAdd);
		}
		setIsAdded(true);
	};

	useEffect(() => {
		const productRef = collection(db, 'products');
		const docRef = doc(productRef, itemId);

		getDoc(docRef)
			.then((doc) => setItem({ id: doc.id, ...doc.data() }))
			.finally(() => setLoading(false));
	}, []);
	return (
		<div>
			<h3>Detalles</h3>
			{!loading ? (
				item ? (
					<>
						<ItemDetail item={item} />
						{!isAdded ? (
							<ItemCount stock={5} onAdd={onAdd} item={item} />
						) : (
							<div className='buy-btn'>
								<Link to='/cart'>Terminar compra</Link>
							</div>
						)}
					</>
				) : (
					<h1>No existe este item</h1>
				)
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};
