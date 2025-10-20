import { useSelector } from "react-redux";
import Button from "../../ui/Button.jsx";
import { formatCurrency } from "../../utils/helpers.js";
import DeleteItem from "./DeleteItem.jsx";
import UpdateQuantity from "./UpdateQuantity.jsx";
import { getCurrentQuantity } from "./cartSlice.js";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const current = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantity current={current} pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
