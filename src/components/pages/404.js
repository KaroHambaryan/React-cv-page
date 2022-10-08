import ErrorMessage from "../error-message/ErrorMessage";
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<Link to="/">Back to main page</Link>
		</div>
	)
}

export default Page404;