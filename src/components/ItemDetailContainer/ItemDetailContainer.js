import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	useEffect(() => {
		const getProducts = new Promise((resolve, reject) => {
			const fetchedProducts = products;
			const index = Math.random() * 5;
			setTimeout(() => {
				resolve(fetchedProducts[Math.floor(index)]);
			}, 2000);
		});
		getProducts.then((res) => setItem(res));
	}, []);
	return (
		<div>
			<h3>Detalles</h3>
			{item ? <ItemDetail item={item} /> : <h1>Loading...</h1>}
			<ItemCount stock={5} />
		</div>
	);
};
