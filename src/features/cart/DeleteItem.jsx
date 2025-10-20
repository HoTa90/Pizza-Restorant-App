import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { deleteItem } from "./cartSlice.js";

export default function DeleteItem({pizzaId, children}) {

	const dispatch = useDispatch()

  return (
	  <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">{children}</Button>
  )
}