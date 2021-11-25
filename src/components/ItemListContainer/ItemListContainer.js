import React, { useEffect, useState } from 'react';
import { products } from '../../data';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';
const ItemListContainer = ({ greeting }) => {
	const [productsList, setProductsList] = useState([]);
	useEffect(() => {
		const getProducts = new Promise((resolve, reject) => {
			const fetchedProducts = products;
			setTimeout(() => {
				resolve({ products: fetchedProducts });
			}, 2000);
		});
		getProducts.then((res) => setProductsList(res.products));
	}, []);
	return (
		<div>
			<h1>{greeting}</h1>
			{productsList.length > 0 ? (
				<ItemList items={productsList} />
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};

export default ItemListContainer;
