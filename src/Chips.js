import { Link } from 'react-router-dom';
import './Chips.css';

const Chips = () => {
	return (
		<div className="Chips">
			<div className="Chips-text">
				<h1>Here's some Lays Chips</h1>
				<p>So salty, could use a Coke...</p>
				<br />
				<Link exact to="/">
					Pick something else
				</Link>
			</div>
			<img src="https://www.clipartmax.com/png/full/108-1082643_strike-and-spare-hendersonville-lays-potato-chips-classic-4-25-oz.png" />
		</div>
	);
};

export default Chips;
