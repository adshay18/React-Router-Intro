import { Link } from 'react-router-dom';
import './Lunchables.css';

const Lunchables = () => {
	return (
		<div className="Lunchables">
			<div className="Lunchables-text">
				<h1>Here's some Lunchables</h1>
				<p>Finally picked the right snack.</p>
				<br />
				<Link exact to="/">
					Pick something else
				</Link>
			</div>
		</div>
	);
};

export default Lunchables;
