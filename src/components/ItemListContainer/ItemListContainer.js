import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '../../data';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.scss';
const ItemListContainer = ({ greeting }) => {
	const { categoryId } = useParams();
	const [productsList, setProductsList] = useState([]);
	useEffect(() => {
		setProductsList([]);

		const getProducts = new Promise((resolve, reject) => {
			const fetchedProducts = products;
			setTimeout(() => {
				if (!categoryId) {
					resolve({ products: fetchedProducts });
				}
				if (categoryId) {
					resolve({
						products: fetchedProducts.filter(
							(product) => product.category === categoryId
						),
					});
				}
			}, 2000);
		});

		getProducts.then((res) => {
			if (!categoryId) {
				setProductsList(res.products);
			}

			if (categoryId) {
				setProductsList(res.products);
			}
		});
	}, [categoryId]);
	return (
		<div>
			<h1>{greeting}</h1>
			{productsList.length > 0 ? (
				<ItemList items={productsList} />
			) : (
				<h1>Cargando...</h1>
			)}
		</div>
	);
};

export default ItemListContainer;
