import { ItemCount } from './components/ItemCount/ItemCount.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<ItemListContainer greeting='Hola coder!' />
			<ItemCount stock={5} initial={1} />
		</div>
	);
}

export default App;
