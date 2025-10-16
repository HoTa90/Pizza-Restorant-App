import { useLoaderData } from "react-router";
import MenuItem from "./MenuItem.jsx";

function Menu() {
	const menu = useLoaderData();

	return (
		<ul>
			{menu.map(p => <MenuItem pizza={p} key={p.id} />)}
		</ul>
	)
}


export default Menu;
