import { Link } from 'react-router-dom';

const Lunchables = () => {
	return (
		<div className="Lunchables">
			<p>Here's some Lunchables, the cool ones with the capri sun</p>
			<Link exact to="/">
				Pick something else
			</Link>
		</div>
	);
};

export default Lunchables;
