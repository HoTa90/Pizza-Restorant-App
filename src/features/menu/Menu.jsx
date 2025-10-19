import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem.jsx";

function Menu() {
	const menu = useLoaderData();

	return (
		<ul className="divide-y divide-stone-300 px-2">
			{menu.map(p => <MenuItem pizza={p} key={p.id} />)}
		</ul>
	)
}


export default Menu;
