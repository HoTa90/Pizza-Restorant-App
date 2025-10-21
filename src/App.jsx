import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import Menu from "./features/menu/Menu.jsx";

import CreateOrder from "./features/order/CreateOrder.jsx";
import Order from "./features/order/Order.jsx";
import Cart from "./features/cart/Cart.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import { menuLoader, orderLoader } from "./services/loaders.js";
import { orderAction, updateOrderAction } from "./services/actions.js";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: orderAction,
      },
      {
        path: "/order/:orderId",
        loader: orderLoader,
        action: updateOrderAction,
        element: <Order />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
