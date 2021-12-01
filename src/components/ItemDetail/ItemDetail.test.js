import { render } from '@testing-library/react';
import { ItemDetail } from './ItemDetail';
import '@testing-library/jest-dom';
test('Si no hay stock muestra cartel', () => {
	const isInCart = jest.fn();
	const component = render(
		<ItemDetail item={{ stock: 1 }} isInCart={isInCart} />
	);
	expect(document.querySelector('.no-stock')).toBeInTheDocument();
});
