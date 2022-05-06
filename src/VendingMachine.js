import { Link } from 'react-router-dom';

const VendingMachine = () => {
	return (
		<div>
			<h1>Vending Machine</h1>
			<div>
				<h2>Pick something to eat</h2>
				<ul>
					<li>
						<Link exact to="/coke">
							Coca Cola
						</Link>
					</li>
					<li>
						<Link exact to="/chips">
							Chips
						</Link>
					</li>
					<li>
						<Link exact to="/lunchables">
							Lunchables
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VendingMachine;
