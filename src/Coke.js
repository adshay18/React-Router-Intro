import { Link } from 'react-router-dom';

const Coke = () => {
	return (
		<div className="Coke">
			<p>Here's some coke</p>
			<Link exact to="/">
				Pick something else
			</Link>
		</div>
	);
};

export default Coke;
