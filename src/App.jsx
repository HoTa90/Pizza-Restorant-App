import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home.jsx";
import Menu from "./features/menu/Menu.jsx";

import CreateOrder from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";
import Cart from "./features/cart/Cart.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import { menuLoader } from "./services/loaders.js";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/menu",
				element: <Menu />,
				loader: menuLoader,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/order/new",
				element: <CreateOrder />,
			},
			{
				path: "/order/:orderId",
				element: <Order />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
