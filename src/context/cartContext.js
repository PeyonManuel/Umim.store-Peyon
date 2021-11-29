import { createContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addItem = (item, quantity) => {
		setCart([...cart, { item, quantity }]);
	};
	const removeItem = (itemId) => {
		setCart(cart.filter(({ item }) => item.id !== itemId));
	};
	const clear = () => {
		setCart([]);
	};
	const isInCart = (itemId) => {
		const itemToFind = cart.find((item) => item.id === itemId);
		return itemToFind ? true : false;
	};
	useEffect(() => {
		console.log(cart);
	}, [cart]);
	return (
		<CartContext.Provider
			value={{ addItem, removeItem, clear, isInCart, cart }}>
			{children}
		</CartContext.Provider>
	);
};
