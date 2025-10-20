import { useDispatch } from "react-redux";
import Button from "../../ui/Button.jsx";
import { decreaseQuantity, increaseQuantity } from "./cartSlice.js";

export default function UpdateQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
