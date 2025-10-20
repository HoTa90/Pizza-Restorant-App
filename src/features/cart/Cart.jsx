import LinkButton from "../../ui/LinkButton.jsx";
import Button from "../../ui/Button.jsx";
import CartItem from "./CartItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice.js";
import EmptyCart from "./EmptyCart.jsx";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  console.log(cart)

  return (
    <div className="px-2 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-10 space-x-2">
        <Button to="/order/new" type={"primary"}>
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
