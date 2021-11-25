import { ItemCount } from './components/ItemCount/ItemCount.js';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<main>
				<ItemListContainer greeting='Hola coder!' />
				<ItemDetailContainer />
				<ItemCount stock={5} initial={1} />
			</main>
		</div>
	);
}

export default App;
