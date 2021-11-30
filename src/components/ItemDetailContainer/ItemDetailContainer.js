import React, { useContext, useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import './ItemDetailContainer.scss';
import { CartContext } from '../../context/cartContext';
import { collection, getDoc, doc } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';
export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const { addItem, isInCart } = useContext(CartContext);
	const { itemId } = useParams();
	const onAdd = (item, quantityToAdd) => {
		if (!isInCart(item.id)) {
			addItem(item, quantityToAdd);
		}
	};

	useEffect(() => {
		const productRef = collection(db, 'products');
		const docRef = doc(productRef, itemId);

		getDoc(docRef)
			.then((doc) => setItem({ id: doc.id, ...doc.data() }))
			.finally(() => setLoading(false));
	}, [itemId]);
	return (
		<div>
			<h3>Detalles</h3>
			{!loading ? (
				item ? (
					<>
						<ItemDetail item={item} onAdd={onAdd} isInCart={isInCart} />
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
