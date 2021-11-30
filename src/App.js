import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext.js';
import { CartContainer } from './components/CartContainer/CartContainer.js';
import { Checkout } from './components/Checkout/Checkout.js';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<div className='App'>
					<NavBar />
					<main>
						<Routes>
							<Route
								path='/'
								element={<ItemListContainer greeting='Hola coder!' />}></Route>
							<Route
								path='/category/:categoryId'
								element={<ItemListContainer greeting='Hola coder!' />}></Route>
							<Route
								path='/item/:itemId'
								element={<ItemDetailContainer />}></Route>
							<Route path='/cart' element={<CartContainer />}></Route>
							<Route path='/checkout' element={<Checkout />}></Route>
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
