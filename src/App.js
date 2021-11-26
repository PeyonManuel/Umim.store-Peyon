import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './context/cartContext.js';

function App() {
	return (
		<CartContext.Provider value={[]}>
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
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</CartContext.Provider>
	);
}

export default App;
