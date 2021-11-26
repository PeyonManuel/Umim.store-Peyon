import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { ItemCount } from '../ItemCount/ItemCount';
import { useParams } from 'react-router';
export const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const { itemId } = useParams();
	useEffect(() => {
		const getProduct = new Promise((resolve, reject) => {
			const fetchedProducts = products;
			const index = Math.random() * 5;
			setTimeout(() => {
				resolve(fetchedProducts[itemId]);
			}, 2000);
		});
		getProduct.then((res) => {
			setItem(res);
			setLoading(false);
		});
	}, []);
	return (
		<div>
			<h3>Detalles</h3>
			{!loading ? (
				item ? (
					<ItemDetail item={item} />
				) : (
					<h1>No existe este item</h1>
				)
			) : (
				<h1>Loading...</h1>
			)}
			<ItemCount stock={5} />
		</div>
	);
};
