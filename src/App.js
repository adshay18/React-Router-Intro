import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Coke from './Coke';
import Chips from './Chips';
import Lunchables from './Lunchables';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/coke">
					<Coke />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/lunchables">
					<Lunchables />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
