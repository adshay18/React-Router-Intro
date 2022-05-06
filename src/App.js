import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import VendingMachine from './VendingMachine';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/coke">
					Coca cola
					<Link exact path="/">
						Home
					</Link>
				</Route>
				<Route exact path="/chips">
					Lays
				</Route>
				<Route exact path="/lunchables">
					lunchables
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
