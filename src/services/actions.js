import { redirect } from "react-router";
import { createOrder } from "./apiRestaurant.js";
import { isValidPhone } from "../utils/helpers.js";

export async function orderAction({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const order = {
		...data,
		cart: JSON.parse(data.cart),
		priority: data.priority === "on",
	};

	const errors = {};
	if (!isValidPhone(order.phone)) {
		errors.phone = "Please add a correct phone number!";
	}

	if (Object.keys(errors).length > 0) {
		return errors;
	}

	const newOrder = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}
