import { redirect } from "react-router";
import { createOrder } from "./apiRestaurant.js";

export async function orderAction({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "on",
	};

	const newOrder = await createOrder(order);
	return redirect(`/order/${newOrder.id}`)
}
