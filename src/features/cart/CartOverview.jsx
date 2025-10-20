import { useSelector } from "react-redux";
import { Link } from "react-router";
import { getTotalPizzaPrice, getTotalPizzaQuantity } from "./cartSlice.js";
import { formatCurrency } from "../../utils/helpers.js";

function CartOverview() {
  const totalPizzas = useSelector(getTotalPizzaQuantity);
  const totalPrice = useSelector(getTotalPizzaPrice);

  if (!totalPizzas) return null

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
