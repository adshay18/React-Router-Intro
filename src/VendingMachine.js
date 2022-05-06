import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<div className="VendingMachine-text">
				<h1>Vending Machine</h1>
				<h2>Pick something to eat!</h2>
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
