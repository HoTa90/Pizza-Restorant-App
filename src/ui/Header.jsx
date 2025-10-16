import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder.jsx";

export default function Header() {
	return (
		<header>
			<Link to={"/"}>Fast React Pizza Co.</Link>
			<SearchOrder />
			<p>TestUser</p>
		</header>
	);
}
