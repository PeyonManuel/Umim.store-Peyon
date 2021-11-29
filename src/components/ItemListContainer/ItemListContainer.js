import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../../data';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config';
const ItemListContainer = ({ greeting }) => {
	const { categoryId } = useParams();
	const [productsList, setProductsList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const productsRef = collection(db, 'products');
		const q = categoryId
			? query(productsRef, where('category', '==', categoryId))
			: productsRef;
		getDocs(q)
			.then((res) => {
				const products = res.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProductsList(products);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);
	return (
		<div>
			<h1>{greeting}</h1>
			{!loading ? (
				productsList.length > 0 ? (
					<ItemList items={productsList} />
				) : (
					<h1>Esta categoria no existe</h1>
				)
			) : (
				<h1>Cargando...</h1>
			)}
		</div>
	);
};

export default ItemListContainer;
