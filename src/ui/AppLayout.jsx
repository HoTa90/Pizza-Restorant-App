import { Outlet } from "react-router";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";

export default function AppLayout() {
	return (
		<div>
			<Header />
			<main>
				<Outlet />
			</main>

			<CartOverview />
		</div>
	);
}
