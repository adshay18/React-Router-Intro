import { Link } from 'react-router-dom';
import './Coke.css';

const Coke = () => {
	return (
		<div className="Coke">
			<div className="Coke-text">
				<h1>Here's some Coke</h1>
				<p>Wow it's so delicious...</p>
				<br />
				<Link exact to="/">
					Pick something else
				</Link>
			</div>
			<div className="Coke-img" />
		</div>
	);
};

export default Coke;
