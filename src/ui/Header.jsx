import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder.jsx";

export default function Header() {
	return (
		<header className="bg-indigo-500">
			<Link to={"/"}>Fast React Pizza Co.</Link>
			<SearchOrder />
			<p>TestUser</p>
		</header>
	);
}
