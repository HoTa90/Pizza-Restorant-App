import { getMenu } from "./apiRestaurant.js";

export async function menuLoader() {
	const menu = await getMenu();
	return menu;
}
