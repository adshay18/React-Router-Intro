import { Link } from 'react-router-dom';

const Chips = () => {
	return (
		<div className="Chips">
			<p>Here's some chips</p>
			<Link exact to="/">
				Pick something else
			</Link>
		</div>
	);
};

export default Chips;
